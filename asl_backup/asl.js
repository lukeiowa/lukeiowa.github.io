// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/wuL1xFEJ6/";

const highestPredictionDisp = document.getElementById("highestPredictionDisp"); 
const finalTextDisplay = document.getElementById("resultText");
const impBtnDisp = document.getElementsByClassName("impBtn");

let model, webcam, labelContainer, maxPredictions;
let active = false;
let currentPredictionLabels = [];
let currentPredictionNum = [];
//let repeatsIndex =  [];
let frames = 0;
let maxResult, maxResultIndex;

let resultArr = [];
let resultText = "";

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

async function switchFunction(chosenClass, chosenSection) {
    let sections = document.getElementsByClassName(chosenClass);
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    } 
    sections[chosenSection].style.display = "block";
} 

async function viewModal(id) {
    document.getElementById(id).showModal();
}

async function hideModal(id) {
    document.getElementById(id).close();
}
// Load the image model and setup the webcam
async function init(reset) {

    if (reset) {
        resultArr = [];
        resultText = "";
    }
    switchFunction("impBtn", 1);
    switchFunction("chunk", 0);
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    active = true;

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam 
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    if (document.getElementsByTagName("label-container").length == 0) {
        //labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }
}

async function speakText() {
    switchFunction("chunk", 2);
    for (let i = 0; i < resultArr.length; i++) {
        if (i == 0) {
            resultText += resultArr[i]; 
        } else {
            resultText += resultArr[i].toLowerCase();
        }
    }
    var msg = new SpeechSynthesisUtterance();
    msg.rate = 0.5;
    msg.text = resultText;
    window.speechSynthesis.speak(msg);
    finalTextDisplay.innerHTML = "Translation: " + resultText;
    console.log(frames);
    console.log(resultText);
}

async function stop() {
    webcam.stop();
    document.getElementsByTagName('canvas')[0].remove();
    active = false;
    analyzeArray();
    switchFunction("chunk", 1)
}

async function loop() {
    if (active) {
        frames += 1;
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }
}

// run the webcam image through the image model
async function predict() {
    if (active) {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        currentPredictionLabels = [];
        currentPredictionNum = [];
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;

            currentPredictionLabels.push(prediction[i].className);
            currentPredictionNum.push(prediction[i].probability);

            //let hqPredict = prediction.reduce((a, b) => Math.max(a, b), -Infinity);
            /*
            if (i > 0 && frames % 30 == 0 && prediction[i].probability >= 0.70) {
                listOfResults.push(prediction[i].className);
            } */
        }


        //highestPredictionDisp.innerHTML = math.m;
    }
}

function findMaxIndex(x) {
    return x == maxResult;
}

function confirmAnswer(confirm) {
    if (!confirm) {
        resultArr.pop();
        console.log("Sorry for the inconvenience!");
        init(false);
    } else {
        init(false);
    }
}
function analyzeArray() {
    console.log("Analyzing the array of values... this may take a while.")
    maxResult = Math.max(...currentPredictionNum);
    maxResultIndex = currentPredictionNum.findIndex(findMaxIndex);
    console.log(maxResult);
    console.log(currentPredictionLabels[maxResultIndex]);

    highestPredictionDisp.innerHTML = currentPredictionLabels[maxResultIndex];
    resultArr.push(currentPredictionLabels[maxResultIndex]);
}

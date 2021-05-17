// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
window.onload = function startPage() {
    if (localStorage.getItem("loggedin") == "true") {
        window.alert("Hello " + localStorage.getItem("username") + "!" + "\n You're already signed in! \n Directing you to our main page...");
    }
}

function alerts() {
window.alert("please work");
}

function directToHomepage() {
  location.replace("https://lukeiowa.github.io/pages/home.html");
  window.alert("kill me");
  display();
}

function display() {
  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
  message = "<ul><li><b>USERNAME: </b>" + document.login.uname.value;
  message += "<li><b>PASSWORD: </b>" + document.login.psw.value + "</ul>";
  DispWin.document.write(message);
}



function openModal() {
document.getElementById('id01').style.display = 'block';
if (localStorage.getItem("rememberme") == "true") {
        document.getElementById("uname").value =
localStorage.getItem("username");
    document.getElementById("psw").value =
localStorage.getItem("password");
} }
function setUserInfo() {
        var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    var checkbox = document.getElementById("remember").checked;
  if (localStorage.getItem("loggedin") != "true") {
        if (username == "" || password == "") {
    window.alert("Please fill out the form!");
    } else {
    window.alert("Welcome " + username + "!\n Your Username is : " +
username + "\nYour Password is: " + password);
    if (checkbox == true) {
    window.alert("Remember me is on!");
    localStorage.setItem("rememberme", "true");
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("loggedin", "true");
  location.replace("https://lukeiowa.github.io/pages/home.html");
    }
} else {
  if (checkbox == true) {
    window.alert("Remember me is on!");
    localStorage.setItem("rememberme", "true");
    }
  if (username != localStorage.getItem("username") && password !=
localStorage.getItem("password")) {
   window.alert("Incorrect Username and Password!");
        } else if (username != localStorage.getItem("username")) {
    window.alert("Incorrect Username!");
    } else if (password != localStorage.getItem("password")) {
    window.alert("Incorrect Password!");
 
} else {
        window.alert("Welcome back " + username + "!");
     location.replace("https://lukeiowa.github.io/pages/home.html");
} }
}
function forgotPassword() {
if (localStorage.getItem("loggedin") == "true") {
        window.alert("Your Password is: " +
localStorage.getItem("password"));
} else {
 }
window.alert("Sign up to see this option!");
}

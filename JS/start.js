// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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

function setUserInfo() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    if (username == "" || password == "") {
    window.alert("Please fill out the form!");
    } else {
    window.alert("Welcome " + username + "!\n Your Username is : " + username + "\nYour Password is: " + password); 
    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("loggedin", "true");
    location.replace("https://lukeiowa.github.io/pages/home.html");
    }
}

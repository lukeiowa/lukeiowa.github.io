window.onload = function startPage() {
    redirect();
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function redirect() {
if (localStorage.getItem("loggedin") == null) {
        window.alert("Hello! You have not selected a payment plan!\nDirecting you to our main page...");
        location.replace("https://lukeiowa.github.io/pages/start.html");
    }
}

var coll = document.getElementsByClassName("collapsible");
var e;
var d = new Date("2015-03-25");

window.onload = function startingPage() {
  window.alert("NOTE: The game is currently down as of " + d + " but will be fixed shortley (Around 3PM EST?)");
}



for (e = 0; e < coll.length; e++) {
  coll[e].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function redirect() {
        location.replace("https://lukeiowa.github.io/game.html");
}

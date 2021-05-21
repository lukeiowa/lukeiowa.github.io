var d = new Date("2015-03-25");

window.onload = function startingPage() {
  window.alert("NOTE: The generator is currently down as of " + d + " but will be fixed shortly (Around 3PM EST?)");
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function redirect() {
        location.replace("https://lukeiowa.github.io/generator.html");
}

var coll = document.getElementsByClassName("collapsible");
var a;
for (a = 0; a < coll.length; a++) {
  coll[a].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
}); }

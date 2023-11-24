window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function hamburgerMenu() {
  
}

var elements = document.getElementsByClassName("column");

var i;

function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const navBar = document.getElementsByClassName("navBar")[0]
const navMenu = navBar.getElementsByClassName("navMenu")[0]
const navIcon = navMenu.getElementsByClassName("navIcon")
// ??? what u mean what look at index.html, navIcon DOESNT EXiST check tele

// const navMenu = document.getElementsByClassName(".navMenu");
// const navItem = document.getElementsByClassName(".navItem");
// const navIcon= document.getElementsByClassName(".navIcon");

function hamburgerMenu() {
  if (navMenu.classList.contains("showNavMenu")) {
    navMenu.classList.remove("showNavMenu");
  } else {
    navMenu.classList.add("showNavMenu");

  }
  navIcon.addEventListener("click", "toggleMenu");
}
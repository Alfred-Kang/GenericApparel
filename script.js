document.addEventListener("DOMContentLoaded", () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  const navBar = document.getElementsByClassName("navBar")[0]
  const navMenu = document.getElementsByClassName("navMenu")[0]
  const navIcon = document.getElementsByClassName("navIcon")[0]

  navIcon.addEventListener("pointerdown", () => {
    if (navIcon.style.color === "rgb(235, 214, 182)") {
      navIcon.style.color = "#DB5A42"
    } else {
      navIcon.style.color = "#ebd6b6"
    }

    if (navMenu.classList.contains("showNavMenu")) {
      navMenu.classList.remove("showNavMenu");
    } else {
      navMenu.classList.add("showNavMenu");
    }
  })
})
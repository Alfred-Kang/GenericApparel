function modeSwitch() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
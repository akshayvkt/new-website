// This function toggles the dark and light mode
function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  
    // Update the button text and the text in the HTML file
    var button = document.getElementById("toggle-button");
    var text = document.getElementById("toggle-text");
    button.innerHTML = currentClass == "dark-mode" ? "Light" : "Dark";
    text.innerHTML = currentClass == "dark-mode" ? "Switch to light mode" : "Switch to dark mode";
  }
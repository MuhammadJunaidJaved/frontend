// Get all the buttons
var buttons = document.querySelectorAll("button");

// Add a click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("You clicked " + button.textContent);
  });
});
 
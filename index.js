// Function to add an event listener to a button
function addingEventListener() {
// Get the button element by its ID 'button'
const input = document.getElementById('button');

// Add a click event listener to the button
input.addEventListener('click', function() {
// This function will be executed when the button is clicked
 alert('I was clicked!');// Display an alert when the button is clicked
    });
}
// Get the button element by its ID 'button' and store it in the input variable
const input = document.getElementById('button');

// Function to display an alert when called
function clickAlert() {
  alert('I was clicked!');// Display an alert with a message
}

// Add a second event listener to the same button to call clickAlert when clicked
input.addEventListener('click', clickAlert); // This will also alert 'I was clicked!'
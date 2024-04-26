// Select all input elements with the class "input"
const inputs = document.querySelectorAll(".input");

// Select the form element with the id "form"
const form = document.getElementById('form');

// Function to add focus styling when an input field is focused
function focusFunc() {
  let parent = this.closest('.input-container');
  parent.classList.add("focus");
}

// Function to remove focus styling when an input field is blurred
function blurFunc() {
  let parent = this.closest('.input-container');
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

// Loop through each input element and attach focus and blur event listeners
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Add event listener for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission behavior
  
  // Variable to track if the form is valid
  let isValid = true;

  // Loop through each input element
  for (let i = 0; i < inputs.length; i++) {
    const parent = inputs[i].closest('.input-container');
    const errorMessage = parent.querySelector('small');
    
    // Check if input value is empty
    if (inputs[i].value.trim() === "") {
      errorMessage.style.visibility = 'visible'; // Show error message
      isValid = false; // Set isValid to false
    } else {
      errorMessage.style.visibility = 'hidden'; // Hide error message
    }
  }

  // If the form is not valid, show an alert
  if (!isValid) {
    alert("Please complete the whole form before submitting.");
  } else {
    // If the form is valid, submit the form
    form.submit();
  }
});

//creating a function that when the hamburger menu gets clicked the style of the side bar style will change to 'flex'

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
}
//creation a function that when close icon gets clicked the side bar will no longer appear

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}
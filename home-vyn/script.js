// Makes sure gallary start with first image
let current = 0;

let interval;

// Get all the  .photo class imagese in the gallery
const images = document.querySelectorAll('.gallery .photo img');

// Total number of images in the gallery
const numImages = images.length;

// This function updates which image and dot are visible
function showImage(index) {
    images.forEach((img, idx) => {                 // Go through each image in the loop
        img.parentNode.style.opacity = 0;          // Hide the image by setting its opacity to zero Opactity closer to 1 visbile closer to 0 turns transparant 
        dots[idx].classList.remove('active');      // Remove the 'active' highlight from the dot
    });
    images[index].parentNode.style.opacity = 1;    // Show the current image by setting opacity to full
    dots[index].classList.add('active');           // Highlight the dot that matches to current image. If 3rd image is shown it will highlight the 3rd dot
}

// Function to handle the manual selection of images using dots with the mouse
function currentSlide(index) {
    clearInterval(interval);                       // Stop the automatic slideshow
    current = index;                               // Update current index to the selected image
    showImage(current);                            // Display the selected image
    interval = setInterval(nextSlide, 5000);       // Restart the automatic slideshow after 5 seconds
}

// Function to advance to the next image in the slideshow
function nextSlide() {
    current = (current + 1) % numImages;           // Increment current index and loop back if necessary
    showImage(current);                            // Show the next image
}

// Wait until all HTML content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {    // JS cant run until the website has completly loaded
    dots = document.querySelectorAll('.gallery-indicators .dot');  // Find and store all the navigation dots from the gallery
    showImage(current);                          // Display the first image when the page loads
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));  // When a dot is clicked, show the right image i.e click 2nd dot show 2nd image
    });
    interval = setInterval(nextSlide, 5000);     // Auto Change image every 5 seconds
});

document.querySelector('.hamburger-menu').addEventListener('click', function () {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});

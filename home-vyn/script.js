// Makes sure gallery starts with the first image
let current = 0;
let interval;
const images = document.querySelectorAll('.gallery .photo img');
const numImages = images.length;  // Total number of images in the gallery

// This function updates which image and dot are visible
function showImage(index) {
    images.forEach((img, idx) => {
        img.parentNode.style.opacity = 0;  // Hide the image by setting its opacity to zero
        dots[idx].classList.remove('active');  // Remove the 'active' highlight from the dot
    });
    images[index].parentNode.style.opacity = 1;  // Show the current image by setting opacity to full
    dots[index].classList.add('active');  // Highlight the dot that matches the current image
}

// Function to handle the manual selection of images using dots with the mouse
function currentSlide(index) {
    clearInterval(interval);  // Stop the automatic slideshow
    current = index;  // Update current index to the selected image
    showImage(current);  // Display the selected image
    interval = setInterval(nextSlide, 5000);  // Restart the automatic slideshow after 5 seconds
}

// Function to advance to the next image in the slideshow
function nextSlide() {
    current = (current + 1) % numImages;  // Increment current index and loop back if necessary
    showImage(current);  // Show the next image
}

// Wait until all HTML content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    dots = document.querySelectorAll('.gallery-indicators .dot');  // Find and store all the navigation dots from the gallery
    showImage(current);  // Display the first image when the page loads
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));  // When a dot is clicked, show the corresponding image
    });
    interval = setInterval(nextSlide, 5000);  // Auto change image every 5 seconds
});

// JavaScript for sidebar toggling
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';  // Make the sidebar visible
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';  // Hide the sidebar
}
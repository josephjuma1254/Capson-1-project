// script.js - JavaScript for responsiveness

// Function to adjust navbar gap based on screen width
function adjustNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 600) {
            navbar.style.gap = '10px';
            navbar.style.flexDirection = 'column';
        } else if (screenWidth < 900) {
            navbar.style.gap = '50px';
            navbar.style.flexDirection = 'row';
        } else {
            navbar.style.gap = '250px';
            navbar.style.flexDirection = 'row';
        }
    }
}

// Function to adjust font sizes for responsiveness
function adjustFontSizes() {
    const body = document.body;
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        body.style.fontSize = '14px';
    } else if (screenWidth < 900) {
        body.style.fontSize = '16px';
    } else {
        body.style.fontSize = 'larger';
    }
}

// Function to make images responsive
function adjustImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    });
}

// Function to adjust form elements for responsiveness
function adjustForms() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.style.width = '100%';
        input.style.boxSizing = 'border-box';
    });
}

// Initial adjustments on page load
document.addEventListener('DOMContentLoaded', function() {
    adjustNavbar();
    adjustFontSizes();
    adjustImages();
    adjustForms();
});

// Adjust on window resize
window.addEventListener('resize', function() {
    adjustNavbar();
    adjustFontSizes();
});
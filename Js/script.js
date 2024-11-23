// JavaScript to toggle the navbar visibility
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

let currentIndex = 1; // Start with the second image (middle) as active

// Function to update the carousel display
function updateCarousel(images, carousel) {
  const visibleImages = [
    images[(currentIndex - 1 + images.length) % images.length], // Previous image
    images[currentIndex], // Active image
    images[(currentIndex + 1) % images.length], // Next image
  ];

  // Clear the carousel and add the visible images
  carousel.innerHTML = "";
  visibleImages.forEach((img, i) => {
    carousel.appendChild(img);
    // Apply the active class only to the middle (active) image
    img.classList.toggle("active-img", i === 1);
  });
}

// Function to move the carousel to the right
function moveRight(images, carousel) {
  currentIndex = (currentIndex + 1) % images.length; // Increment and wrap around
  updateCarousel(images, carousel);
}

// Function to move the carousel to the left
function moveLeft(images, carousel) {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement and wrap around
  updateCarousel(images, carousel);
}

// Initialize the carousel and add event listeners
function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const images = Array.from(document.querySelectorAll(".img-box"));

  // Initial setup
  updateCarousel(images, carousel);

  const leftIcon = document.querySelector(".carousel-wrapper .left-icon");
  const rightIcon = document.querySelector(".carousel-wrapper .right-icon");

  // Add click event listeners
  leftIcon.addEventListener("click", () => moveLeft(images, carousel));
  rightIcon.addEventListener("click", () => moveRight(images, carousel));
}

// C
initCarousel();

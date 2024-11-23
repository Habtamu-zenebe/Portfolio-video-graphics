// JavaScript to toggle the navbar visibility
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.img-box').length;
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1; // Loop back to the last item
  } else if (currentIndex >= totalItems) {
    currentIndex = 0; // Loop back to the first item
  }

  // Move the carousel
  const offset = -currentIndex * (document.querySelector('.img-box').offsetWidth + 20); // 20px for margin
  carousel.style.transform = `translateX(${offset}px)`;
}




// const text = "WELCOME TO MY PORTFOLIO";
// const typingAnimation = document.getElementById("typing-animation");
// const typingSpeed = 120; // Speed of typing (milliseconds)
// const pauseDuration = 1500; // Pause duration before restarting (milliseconds)

// function typeText(text) {
//   let index = 0;

//   // Clear the text and reset width
//   typingAnimation.innerHTML = "";
//   typingAnimation.style.width = "0";
//   typingAnimation.style.animation = "none"; // Reset animation

//   const typingInterval = setInterval(() => {
//     typingAnimation.innerHTML += text[index];
//     index++;

//     // Adjust width to match the text as it types
//     typingAnimation.style.width = `${typingAnimation.scrollWidth}px`;

//     if (index === text.length) {
//       clearInterval(typingInterval);
//       setTimeout(() => {
//         // Clear the text and start typing again
//         typingAnimation.innerHTML = "";
//         typeText(text); // Restart the typing effect
//       }, pauseDuration);
//     }
//   }, typingSpeed);
// }

// typeText(text); // Start typing

// // Smoth Scrolling
// // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
// //   anchor.addEventListener("click", function (e) {
// //     e.preventDefault();

// //     document.querySelector(this.getAttribute("href")).scrollIntoView({
// //       behavior: "smooth",
// //     });
// //   });
// // });

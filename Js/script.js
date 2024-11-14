const text = "WELCOME TO MY PORTFOLIO";
const typingAnimation = document.getElementById("typing-animation");
const typingSpeed = 120; // Speed of typing (milliseconds)
const pauseDuration = 1500; // Pause duration before restarting (milliseconds)

function typeText(text) {
  let index = 0;

  // Clear the text and reset width
  typingAnimation.innerHTML = "";
  typingAnimation.style.width = "0";
  typingAnimation.style.animation = "none"; // Reset animation

  const typingInterval = setInterval(() => {
    typingAnimation.innerHTML += text[index];
    index++;

    // Adjust width to match the text as it types
    typingAnimation.style.width = `${typingAnimation.scrollWidth}px`;

    if (index === text.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        // Clear the text and start typing again
        typingAnimation.innerHTML = "";
        typeText(text); // Restart the typing effect
      }, pauseDuration);
    }
  }, typingSpeed);
}

typeText(text); // Start typing

// Display a welcome alert when the page loads
alert("Welcome to My First Website!");

document.addEventListener("DOMContentLoaded", () => {
  // Buttons for Page Redirection
  const buttons = [
    { selector: "#customButton1", redirect: "home.html" },
    { selector: "#customButton2", redirect: "about.html" },
    { selector: "#customButton3", redirect: "contact.html" },
    { selector: "#customButton", redirect: "gallery.html" }
  ];

  buttons.forEach(({ selector, redirect }) => {
    const button = document.querySelector(selector);
    if (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default action
        document.body.classList.add("fade-out"); // Add fade-out class for animation
        setTimeout(() => {
          window.location.href = redirect; // Redirect after animation
        }, 500); // Match the transition duration in CSS
      });
    }
  });

  // Dynamic Time Display
  const timeElement = document.querySelector("#timeDisplay");
  if (timeElement) {
    function updateTime() {
      const now = new Date();
      timeElement.textContent = now.toLocaleString(); // Display current date and time
    }
    setInterval(updateTime, 1000); // Update time every second
    updateTime(); // Set initial time
  }

  // Hover Effect on Navigation Links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "red"; // Change color on hover
    });
    link.addEventListener("mouseout", () => {
      link.style.color = ""; // Reset color when not hovering
    });
  });
});
const testimonials = [
    '"Velvet Monarch exceeded all my expectations!"',
    '"The designs are so unique and stylish!"',
    '"Customer service was amazing!"'
];

let currentTestimonial = 0;

function rotateTestimonial() {
    const testimonialElement = document.getElementById('testimonial');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonialElement.textContent = testimonials[currentTestimonial];
}

setInterval(rotateTestimonial, 3000); // Rotate every 3 seconds

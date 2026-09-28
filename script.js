// ================================
// Portfolio JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".site_header_nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#0") {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        event.preventDefault();

        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ================================
  // Contact Form
  // ================================

  const contactForm = document.querySelector(".contact_form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields before sending your message.");
        return;
      }

      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert(`Thanks, ${name}! Your message has been received.`);

      // Clear the form after submission
      contactForm.reset();
    });
  }

  // ================================
  // Current Year
  // ================================

  const footerText = document.querySelector("#footer p");

  if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.innerHTML = `&copy; ${currentYear} Dee Kennedy`;
  }

  // ================================
  // Hero Video
  // ================================

  const heroVideo = document.querySelector(".hero-video");

  if (heroVideo) {
    heroVideo.addEventListener("error", () => {
      console.log("The hero background video could not be loaded.");
    });
  }
});
// ================================
// ================================
// Dark Mode Toggle
// ================================

const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.checked = true;
    themeLabel.textContent = "Too dark? 🌙";
}

// Toggle theme
themeToggle.addEventListener("change", function () {

    if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        themeLabel.textContent = "Too dark? 🌙";

        localStorage.setItem("theme", "dark");

    } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeLabel.textContent = "Too bright? ☀️";

        localStorage.setItem("theme", "light");
    }

});
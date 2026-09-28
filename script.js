// ================================
// Portfolio JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".site_header_nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      // Ignore links that don't point to a section
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
const darkModeButton = document.getElementById("dark-mode-toggle");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeButton.textContent = "☀️ Light Mode";
}

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    darkModeButton.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("darkMode", "disabled");
    darkModeButton.textContent = "🌙 Dark Mode";
  }
});




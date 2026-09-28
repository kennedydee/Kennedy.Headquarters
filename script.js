// ================================
// Portfolio JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // Smooth Scrolling
  // ================================

  const navLinks = document.querySelectorAll(".site_header_nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#0") {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        return;
      }

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        event.preventDefault();

        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // ================================
  // Current Year
  // ================================

  const footerText = document.querySelector("#footer p");

  if (footerText) {
    footerText.innerHTML = `&copy; ${new Date().getFullYear()} Dee Kennedy`;
  }


  // ================================
// Hero Video
// ================================

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {

  heroVideo.addEventListener("error", () => {
    console.log("The hero background video could not be loaded.");
  });

  // Make sure the video continues playing after theme changes
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {

      if (heroVideo.paused) {
        heroVideo.play().catch((error) => {
          console.log("Video playback could not resume:", error);
        });
      }

    });
  }
}


  // ================================
  // Dark Mode Toggle
  // ================================

  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");


  // ================================
  // Update Theme
  // ================================

  function updateTheme(isDark) {

    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");

      if (themeLabel) {
        themeLabel.textContent = "Too dark? 🌙";
      }

    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");

      if (themeLabel) {
        themeLabel.textContent = "Too bright? ☀️";
      }
    }
  }


  // ================================
  // Load Saved Theme
  // ================================

  if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      themeToggle.checked = true;
      updateTheme(true);
    } else {
      themeToggle.checked = false;
      updateTheme(false);
    }


    // ================================
    // Listen for Slider Changes
    // ================================

    themeToggle.addEventListener("change", () => {
      updateTheme(themeToggle.checked);
    });
  }

});
// ================================
// Contact Form
// ================================
document.addEventListener("DOMContentLoaded", () => {
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

      const subject = `Portfolio Contact from ${name}`;

      const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

      const mailtoLink =
        `mailto:17kennedy.d@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    });
  }
});
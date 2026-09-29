document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling
  document.querySelectorAll(".site_header_nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#0") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
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

  // Dark mode
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  const heroVideo = document.querySelector(".hero-video");

  function updateTheme(isDark) {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );

    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (themeLabel) {
      themeLabel.textContent = isDark
        ? "Too dark? 🌙"
        : "Too bright? ☀️";
    }
  }

  if (themeToggle) {
    const isDark = localStorage.getItem("theme") === "dark";

    themeToggle.checked = isDark;
    updateTheme(isDark);

    themeToggle.addEventListener("change", () => {
      updateTheme(themeToggle.checked);

      if (heroVideo?.paused) {
        heroVideo.play().catch(() => {});
      }
    });
  }

  // Hero video error handling
  if (heroVideo) {
    heroVideo.addEventListener("error", () => {
      console.log("The hero background video could not be loaded.");
    });
  }
});
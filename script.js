document.addEventListener("DOMContentLoaded", function () {
  // Example: Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.getElementById("checkbox");
  const currentTheme = localStorage.getItem("theme");

  // Set initial theme based on localStorage or system preference
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    themeSwitch.checked = currentTheme === "dark-mode";
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("dark-mode");
    themeSwitch.checked = true;
  }

  // Function to toggle theme
  function toggleTheme() {
    if (themeSwitch.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
    }
  }

  // Event listener for theme switch
  themeSwitch.addEventListener("change", toggleTheme);

  // Optionally, listen for system theme changes
  if (window.matchMedia) {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (event) => {
      if (event.matches) {
        themeSwitch.checked = true;
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
      } else {
        themeSwitch.checked = false;
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light-mode");
      }
    };

    mql.addListener(handleSystemThemeChange);
    handleSystemThemeChange(mql); // Check on load
  }
});

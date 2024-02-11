let darkMode = localStorage.getItem("darkMode");
const themeToggler = document.querySelector("#theme-toggler");

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
  document.querySelector("#text-mode").innerHTML = "Dark Mode";
  document.querySelector("#icon-mode").className = "fa-solid fa-moon";
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", "null");
  document.querySelector("#text-mode").innerHTML = "Light Mode";
  document.querySelector("#icon-mode").className = "fa-solid fa-sun";
};

if (darkMode === "enabled") {
  enableDarkMode();
}

themeToggler.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

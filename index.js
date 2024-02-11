let darkMode = localStorage.getItem("darkMode");
const themeToggler = document.querySelector("#theme-toggler");
let language = localStorage.getItem("language");
const languageToggler = document.querySelector("#language-switcher");

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
  document.querySelector("#icon-mode").className = "fa-solid fa-moon fa-lg";
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", "null");
  document.querySelector("#icon-mode").className = "fa-solid fa-sun fa-lg";
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

// Language Switcher

const setEnglish = () => {
  localStorage.setItem("language", "english");
  document.querySelector("#language-flag").src =
    "./assets/images/united-kingdom.png";
  document.querySelector("#location").innerHTML = "South Tangerang, Indonesia";
  document.querySelector("#occupation").innerHTML =
    '"A Frontend Developer looking for a job and just living. 😬"';
};

const setBahasa = () => {
  localStorage.setItem("language", "bahasa");
  document.querySelector("#language-flag").src =
    "./assets/images/indonesia.png";
  document.querySelector("#location").innerHTML =
    "Tangerang Selatan, Indonesia";
  document.querySelector("#occupation").innerHTML =
    '"Seorang Frontend Developer yang sedang mencari kerja dan sekedar hidup. 😬"';
};

if (language === "english") {
  setEnglish();
} else {
  setBahasa();
}

languageToggler.addEventListener("click", () => {
  language = localStorage.getItem("language");
  if (language == "english") {
    setBahasa();
  } else {
    setEnglish();
  }
});

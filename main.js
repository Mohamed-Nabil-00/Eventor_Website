// Check If There Is A Color In The Local Storage
const idns = document.querySelectorAll(".idn");

if (window.localStorage.getItem("idnColor")) {
  idns.forEach(idn => {
    if (idn.classList.contains("idn-txt")) {
      idn.style.color = window.localStorage.getItem("idnColor");
    } else if (idn.classList.contains("idn-bg")) {
      idn.style.backgroundColor = window.localStorage.getItem("idnColor");
    }
  });
}

// Changing Identity Colors And Save The Color In Local Storage
const colors = document.querySelectorAll(".change-idn div div");

colors.forEach( el => {
  el.onclick = _ => {
    idns.forEach(idn => {
      window.localStorage.setItem("idnColor", el.dataset.color);
      if (idn.classList.contains("idn-txt")) {
        idn.style.color = el.dataset.color;
      } else if (idn.classList.contains("idn-bg")) {
        idn.style.backgroundColor = el.dataset.color;
      }
    });
  };
});

// Toggling Change Identity Widget
const settingButton = document.getElementById("icon");
const changeWidget = document.getElementById("changeIdn");

settingButton.onclick = _ => changeWidget.classList.toggle("hide-widget");

// Adding The Year Of Making The Project
const yearHolder = document.querySelector(".copy-right span");
yearHolder.innerHTML = new Date().getFullYear();

// تم بحمد الله

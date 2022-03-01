// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

const searchInput = document.querySelector('.actions-header__input');
const catalogBtn = document.querySelector('.actions-header__catalog');
searchInput.addEventListener('focusin', function (e) {
   catalogBtn.classList.add('_hidden');
})
searchInput.addEventListener('focusout', function (e) {
   catalogBtn.classList.remove('_hidden');
})
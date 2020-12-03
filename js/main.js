import { renderSocials } from "./components/socials/renderSocials.js";
import { socialsData } from "./data/socialsData.js";
import { renderClock } from "./components/clock/renderClock.js";

import { renderAllProgressBars } from "./components/progress-bar/renderAllProgressBars.js";
import { progressBarData } from "./data/progressBarData.js";

import { formValidator } from './components/form-validator/formValidator.js'

import { Toast } from './components/toast/Toast.js';

renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);

const toast = new Toast();
toast.render();
// toast.show('error', 'Cia yra klaida!!!');
toast.show('success', 'Buvo gera diena!!! ;)');

formValidator('.hero .form');
formValidator('main .form');






// PAVYZDYS - select object is HTML ir pervadink
// const h1DOM = document.querySelector('h1');
// const inputDOM = document.querySelectorAll('main .form > input');

// console.log(h1DOM);
// console.log(inputDOM);

// h1DOM.innerText = 'Hello world';











import { renderSocials } from "./components/socials/renderSocials.js";
import { socialsData } from "./data/socialsData.js";
import { renderClock } from "./components/clock/renderClock.js";

import { renderAllProgressBars } from "./components/progress-bar/renderAllProgressBars.js";
import { progressBarData } from "./data/progressBarData.js";

import { formValidator } from './components/form-validator/formValidator.js'

renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);

formValidator('.hero .form');
formValidator('main .form');






// PAVYZDYS - select object is HTML ir pervadink
// const h1DOM = document.querySelector('h1');
// const inputDOM = document.querySelectorAll('main .form > input');

// console.log(h1DOM);
// console.log(inputDOM);

// h1DOM.innerText = 'Hello world';











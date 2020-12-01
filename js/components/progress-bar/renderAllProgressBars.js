import { isValidProgressBarsList } from './isValidProgressBarsList.js';
import { isValidSingleProgressBar } from './isValidSingleProgressBar.js';
import { renderProgressBar } from './renderProgressBar.js';

/**
 * 
 * @param {Object[]} data
 * @param {string} data[].selector CSS like selektorius, kaip rasti vieta, kur sugeneruoti turini
 * @param {string} data[].title Progress bar pavadinimas
 * @param {string} data[].value Funkcijai tinkamai suveikus grazinas `true`, priesingu atveju - `false`
 */
function renderAllProgressBars(data) {
    if (!isValidProgressBarsList(data)) {
        return false
    }
    for (let i = 0; i < data.length; i++) {
        const bar = data [i];

        if (!isValidSingleProgressBar(bar)) {
            continue;
        }

        renderProgressBar(bar.selector, bar.title, bar.value);
    }

    return true;

}

export { renderAllProgressBars }
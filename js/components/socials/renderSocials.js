import { isInputValid } from "./isInputValid.js";
import {isValidSocialItem } from "./isValidSocialItem.js";

/**
 * Social nuorodu generavimas is pateiktu duomenu i nurodyta vieta DOM'e
 * @param {string} selector Selector, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {object} data Data masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo mtu radus klaida grazinamas `false`, o funkcijai suveikus teisingai `true`
 */
function renderSocials(selector, data) {
    // input validation
    if (!isInputValid(selector, data)) {
        return false;
    }

    // logic
    const socialsDOM = document.querySelector(selector);
    if (!socialsDOM) {
        console.error("ERROR: nerasta turinio ganaravimo vieta");
        return false;
    }

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (!isValidSocialItem(item)) {
            continue;
        }
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }

    // post logic validation
    if (HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti social icon ir link');
        return false;
    }

    // return
    socialsDOM.innerHTML = HTML;
    return true;
}

export { renderSocials }
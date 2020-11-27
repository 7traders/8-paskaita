    // input validation

/**
 * renderSocial() funkcijai skirtu ivesties duomenu (input params) validacija
 * @param {string} selector Selector, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu kliada, tai grazina `false` kitu atveju `true`
 */
function isInputValid(selector, data) {
    if (typeof selector !== 'string') {
        console.error("ERROR: selektorius turi buti tesktinio tipo");
        return false;
    }
    if (selector === '') {
        console.error("ERROR: selektorius negali buti tuscias tekstas");
        return false;
    }
    if (!Array.isArray(data)) {
        console.error('ERROR: social icon generuoti reikia array tipo duomenu');
        return false;
    }
    if (data.length === 0) {
        console.error('ERROR: social icon generuoti reikia ne tuscio array tipo duomenu saraso');
        return false;
    }
    return true;
}

export { isInputValid }
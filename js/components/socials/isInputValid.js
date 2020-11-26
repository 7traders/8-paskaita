    // input validation
function isInputValid(selector, data) {
    if (typeof selector !== 'string') {
        console.error("ERROR: selektorius turi buti tesktinio tipo");
        return false;
    }
    if (typeof selector === '') {
        console.error("ERROR: selektorius negali buti tuscias");
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
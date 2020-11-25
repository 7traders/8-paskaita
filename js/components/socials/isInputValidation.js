    // input validation
function isInputValidation(data) {
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

export { isInputValidation }
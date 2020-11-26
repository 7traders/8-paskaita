function isValidSocialItem(itemObject) {
    if (typeof itemObject !== 'object') {
        console.warn('ERROR: social elemento objekto klaida')
    }
    if (typeof itemObject.link !== 'string' ||
        itemObject.link === '') {
        console.warn('ERROR: social elemento objekto klaida')
        return false;
    }
    if (typeof itemObject.icon !== 'string' ||
        itemObject.icon === '') {
        console.warn('ERROR: social elemento objekto klaida')
        return false;
    }

    return true;
}

export { isValidSocialItem }
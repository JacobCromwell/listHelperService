let validateRequired = (param) => {
    if(param) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    validateRequired
}
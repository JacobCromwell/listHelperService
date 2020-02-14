let validateRequired = (param) => {
    if(param) {
        return true;
    }
    else {
        return false;
    }
}

let validateIsNumber = (param) => {
    if(isNaN(param)){
        return false;
    }
    return true;
}

module.exports = {
    validateRequired
}
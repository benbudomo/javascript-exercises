const leapYears = function(yearPicked) {
    if(yearPicked % 4 === 0 && (yearPicked % 100 !== 0 || yearPicked % 400 === 0)) {
        return true;
    } else {
        return false;
    }

}

module.exports = leapYears

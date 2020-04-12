const palindromes = function(myString) {
    let newString = myString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join('');
    let compareString = myString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    if(newString == compareString) {
        return true
    } else {
        return false;
    }
}

module.exports = palindromes

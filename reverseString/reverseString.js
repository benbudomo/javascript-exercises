const reverseString = function(word) {

    let splitWord = word.split('');

    let reverseWord = splitWord.reverse();

    let joinWord = reverseWord.join('');

    return joinWord;
}

module.exports = reverseString

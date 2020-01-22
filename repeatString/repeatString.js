const repeatString = function(word, times) {
    let heyString = '';

    if (times < 0) {
        return 'ERROR';
    }

    for (i = 0; i < times; i++) {
        
        heyString += word;

    }

    return heyString;
}

module.exports = repeatString

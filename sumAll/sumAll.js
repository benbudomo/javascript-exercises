const sumAll = function(oneNumber, twoNumber) {
    let bothNumbers = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    if (typeof oneNumber === 'number' && typeof twoNumber === 'number' && oneNumber > 0 && twoNumber > 0 && oneNumber < twoNumber) {
        for (let i = oneNumber; i <= twoNumber; i++) {
            bothNumbers.push(i);
        }
        let finalSum = bothNumbers.reduce(reducer);
        return finalSum;
    }

    else if (typeof oneNumber === 'number' && typeof twoNumber === 'number' && oneNumber > 0 && twoNumber > 0 && twoNumber < oneNumber) {
        for (let i = twoNumber; i <= oneNumber; i++) {
            bothNumbers.push(i);
        }
        let finalSum = bothNumbers.reduce(reducer);
        return finalSum;              
    }

    else {
        return 'ERROR';
    }

}

module.exports = sumAll

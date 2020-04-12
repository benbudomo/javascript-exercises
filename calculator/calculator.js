function add (numberOne, numberTwo) {
	return numberOne + numberTwo;
}

function subtract (numberOne, numberTwo) {
	return numberOne - numberTwo;
}

function sum (sumArray) {
	let myTotal = 0;

	for(let i = 0; i < sumArray.length; i++) {
		myTotal += sumArray[i];
	}
	return myTotal;
}

function multiply (myArray) {
	let multiplyTotal = 1;

	for(let i = 0; i < myArray.length; i++) {
		multiplyTotal *= myArray[i];
	}
	return multiplyTotal;
}

function power(powNumberOne, powNumberTwo) {
	return Math.pow(powNumberOne, powNumberTwo);	
}

function factorial(myNumber) {
	if(myNumber === 0) {
		return 1;
	}

	return myNumber * factorial(myNumber - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
// Adding the function to the window makes it globally available
window.calculateSumListener = function() {
	// Return the value of the input #firstNumber
	let stringA = parseInt(document.getElementById("firstNumber").value);
	// Return the value of the input #secondNumber
	let stringB = parseInt(document.getElementById("secondNumber").value);
	// Your code here
	let result = stringA + stringB


	document.getElementById("resultNumber").value = result;
	
};

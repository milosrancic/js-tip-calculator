function calculateTip() {

	// Declare variables
	let billAmmount = document.getElementById('billAmmount').value;
	let serviceQuality = document.getElementById('serviceQuality').value;
	let peopleAmmount = document.getElementById('peopleAmmount').value;

	// if bill ammount is not added or is less than 1
		if (billAmmount === '' || billAmmount < 1) {
			alert("Please enter bill ammount");
			return;
		}

		// if service quality is 0 
		if (serviceQuality == 0) {
			alert("Please enter quality of service");
			return;
		}

		// if people ammount is not added is less than one
		if (peopleAmmount === '' || peopleAmmount < 1) {
			alert("Please enter number of people");
			document.getElementById('each').style.display = 'none';
		} else {
			document.getElementById('each').style.display = 'block';
		}


	// calculate the tip
	let total = (billAmmount * serviceQuality) / peopleAmmount;
	// round to two decimal places
	total = Math.round(total * 100) / 100;
	// leave only two digits after decimal point
	total = total.toFixed(2); 


	// display the tip
	document.getElementById('totalTip').style.display = 'block';
	document.getElementById('tip').innerHTML = total;

}; // end of function

// hide the tip ammount on page load
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';


// calling the function
document.getElementById('calculate').onclick = function() {
	calculateTip();
}
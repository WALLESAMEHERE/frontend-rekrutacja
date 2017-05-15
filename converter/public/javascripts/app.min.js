
var getButton = document.getElementById('convert_money'); // get button ,, convert money ,,
	getButton.addEventListener('click',() => {
		var getAmount = document.getElementById('amount').value; // get value from input
		var changedAmount = convertMoney(getAmount); // function convert money
		var dateAndTimeOfChange = dateTime(); // function get date and hour
		showConvertedMoney(changedAmount,dateAndTimeOfChange); // function add result to HTML
	});
	var convertMoney = (value) => {
		let random_number = Math.floor(Math.random()*100)+1; // draw numer
		let currency = 4.2 * (1+(random_number)/1000); 
		let convertedValue = value * currency; // set the currency
		return convertedValue.toFixed(4); // Get back with 4 decimal places
	}
	var dateTime = () => {
		let date = new Date();
		// function Adds 0 to a number less than 10
			function addZero(i) {
	   			if (i < 10) {
	        		i = "0" + i;
	    		}
	    	return i;
	   	 	}
 	   	let year = date.getFullYear(); // get year
 	   	let month = addZero((date.getMonth() + 1)); // get month +1 (Counts from 0 - January)
 	   	let today = addZero(date.getDate()); // get date
 	   	let hour = addZero(date.getHours()); // get hours
 	   	let minutes = addZero(date.getMinutes()); // get minutes
    	let str = year + "." + month + "." + today + " " +  hour + ":" + minutes;
		return str;
	}
	var showConvertedMoney = (cash, time) => {
		let div = document.createElement('div');
		let p = document.createElement('p');
		let h2 = document.createElement('h2');
		let li = document.createElement('li');
		let span = document.createElement('span');
		let ul = document.getElementById('listOfChange');
		ul.appendChild(li);
		li.appendChild(div);
		div.appendChild(h2).append('PLN Amount');
		div.appendChild(p).append(cash);
		li.appendChild(span).append(time);
		div.className += "changed_amount";
	}

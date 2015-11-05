


$(document).ready(function() {
	
	//test line	
	//console.log(number);

	//function checking input for program/game
	var numinputCheck = function (number) {
	//alert("function test");
		//alert(i);
		//Check whether number is a number
		if (isNaN(number)) {
			var checkOne = prompt("Please enter a number only!");
			numinputCheck(checkOne);
		}
		//check if number is a whole number
		else if (number % 1 !== 0) {
			var checkTwo = prompt("Please enter a whole number!");
			numinputCheck(checkTwo);
		}
		//check if the number entered is blank
		else if (number === null) {
			var checkThree = prompt("Please enter a number!")
			numinputCheck(checkThree);
		}
		//present user with number they input
		else {
			document.write("The number you entered is: " + number + ".");
			playGame(number);
		}
	  }
	

	//alert(numinputCheck(100));
	//function executing fizzbuzz
	var playGame = function (number) {
	//alert("function test");

	 for (var num = 1; num <= number; num++) {
		if (num % 3 === 0 && num % 5 === 0) {
	      document.write("FizzBuzz ");
	    } else if (num % 3 === 0) {
	      document.write("Fizz ");
	    } else if (num % 5 === 0) {
	      document.write("Buzz ");
	    } else {
	      document.write(" " + num + " ");
	    }
	  }
	}

//event handler which initializes program upon button press
$(document).on('click', '.start-button', function() {
		//Get initial number from input
		var initialNumber = $("#number-input").val();
		//alert("event handler test");
		numinputCheck(initialNumber);	
	});
});


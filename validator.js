//Prompt the user to enter their phone number with dashes remind them SPAM

//Create a varialble with our message 

//var request = "Please enter a phone number with dashes.\nThis will not be used for SPAM.";

//store user response in the variable phoneNumber

//var phoneNumber = prompt(request);
//test phoneNumber console.log(phoneNumber);


//test charcters at 4th and 8th position


/*if (phoneNumber.charAt(3) === '-' && phoneNumber.charAt(7) === '-'){
alert('That\'s a valid phone number.');

}else{

alert('This is not valid phone number.');

}*/

var birthDateRequest = "Please enter a birth date with in this format XX/XX/XX.";

var birthDate = prompt(birthDateRequest);

//evaluate values at 0,1,2, 3,4, 5, 6,7

//make sure value at 2 === / and 5 === / 

var numbers = {
	'0':0,
	'1':0,
	'2':2,
	'3':3,
	'4':4,
	'5':5,
	'6':6,
	'7':7,
	'8':8,
	'9':9
}

var isDigit = function (x) {

	for (i=0; i <8; i++) {
		if ((i===2 || i===5) && (x[i] === '/')) {
			continue; 
		}else if (x[i] in numbers){
			continue;
		
		} else {
			return false;
		}

	} 
	return true; 
		
}
console.log(isDigit(birthDate));
// if (isDigit(birthDate)) {
// 	alert("This is not a valid birthdate.");
// }
// // if ((typeof parseInt(birthDate.substring(0,1)) ==='number') && (typeof parseInt(birthDate.substring(3,4) parseInt(birthDate.substring (6,7))) === ""){
// alert('That\'s a valid birth date.');

// }else{

// alert('This is not valid birth date.');

// }










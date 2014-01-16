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



if (birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/'){
alert('That\'s a valid birth date.');

}else{

alert('This is not valid birth date.');

}


// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  //This function causes the series of letters and characters the generator functions produces to be displayed in the text area as the password. 
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
  // When the user clicks the button, a series of prompts asking the length and types of characters should initate.
// generateBtn.addEventListener("click", writePassword);


// cycle of prompts to set password criteria and length

// generateBtn.addEventListener("click", () => {
//   const 
  
// });


var lenght = prompt('How long would you like you password to be? Please enter a number between 8 and 128?');    

var upper = confirm('Would you like to include uppercase letters?');    

var lower = confirm('Would you like to include lowercase letters?');

var num = confirm('Would you like to include numbers?');

var spec = confirm('would you like to include special chatacters?')

// 
// if (upper == true || lower == true || num == true || spec == true) {
//   upper = upperEL; lower = lowerEL; num = numEL; spec = specEL;
// }

console.log(upper)


function generatePassword(upper, lower, num, spec, length ) {
  // make a password squence

  //filter out unwanted characters

  // loop over the length to generate the requested lenngth

  let generatePassword = ''

  const typeArray = [ {upper}, {lower}, {num}, {spec}].filter
  (item => Object.values(items)[0])

  


  console.log('typeArray:', typeArray)



}


//utilise a while loop to cycle through the prompts and alerts that collect the data of what chatactes to include



//define the variables that we will accept as password chatacters
  
  // var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  // var numbers = '123456789'
  // var special = '!@#$%^&*'


  function getRandomUpper () {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upperCase [Math.floor(Math.random() * upperCase.length)]; 
  }
  
  function getRandomLower () {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    return lowerCase [Math.floor(Math.random() * lowerCase.length)]; 
  }
  
  function getRandomNumber () {
    const numbers = '123456789';
    return numbers [Math.floor(Math.random() * numbers.length)]; 
  }
   
  function getRandomSpecial () {
    const  special = '!@#$%^&*';
    return special [Math.floor(Math.random() * special.length)]; 
  }
  
  //verify that functions produce random characters
  console.log(getRandomUpper());
  console.log(getRandomLower());
  console.log(getRandomNumber());
  console.log(getRandomSpecial ());



 
  //utilise a while loop to cycle through the prompts and alerts that collect the data of what chatactes to include





// Functions to generate password characters at requested length
  //takes into considearation the user selected charactes
  //using a function to cycle until the desire lenght of password using the desired characters is created.



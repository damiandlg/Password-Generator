// Assignment code here
/**
 * App State
 */
const appState = {
  passwordLength: 8,
  types: {
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialCharacter: false
  },

}

/**
 * Modal
 */
 const myModal = document.getElementById('myModal')
 const myInput = document.getElementById('myInput')
 
//  myModal.addEventListener('shown.bs.modal', () => {
//    myInput.focus()
//  })

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

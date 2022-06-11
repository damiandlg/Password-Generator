// Assignment code here
/**
 * App State
 */
const appState = {
  passwordLength: 8,
  types: {
    lowercase: false,
    uppercase: false,
    numeric: true,
    specialCharacter: false
  },

}

/**
 * Password Length
 */
//Grab HTML Element
var range = document.querySelector("#customRange1");
var rangeLabel = document.querySelector("#rangeLabel");

//Update inital values from default app state
range.value=appState.passwordLength
rangeLabel.innerHTML = `Password Length: ${appState.passwordLength}`

//Create range function
function determineRange(e) {
  //Get the new range value
  let r = range.value
  //create new string label title with new range
  let labelTitle = `Password Length: ${r}`
  //set new label tittle to the range label inner html
  rangeLabel.innerHTML = labelTitle;
  //update our appstate with new range value
  appstate.passwordLength = r

}

//listen for input change on the range element through the determine range function
range.addEventListener("input", determineRange)


/**
 * Character Types
 */
 var lowercaseSwitch = document.querySelector("#switch1")
 var uppercaseSwitch = document.querySelector("#switch2")
 var numericSwitch = document.querySelector("#switch3")
 var specialCharacterSwitch = document.querySelector("#switch4")
 
 //set default states for our switches
 lowercaseSwitch.checked = appState.types.lowercase
uppercaseSwitch.checked = appState.types.uppercase
numericSwitch.checked = appState.types.numeric
specialCharacterSwitch.checked = appState.types.specialCharacter

function toggleSwitch(e) {
  let switchId = e.target.id
  let isOn = e.target.checked

  //Check and handle lowercase switch
  if (switchId === "switch1") {
    appState.types.lowercase = isOn
    console.log(`Lowercase Switch isOn: ${isOn}`)
 
  }

  //check and handle uppercase switch
  if (switchId === "switch2") {
    appState.types.uppercase = isOn
    console.log(`Uppercase Switch isOn: ${isOn}`)
  }

  //check and handle numeric switch
  if (switchId === "switch3") {
    appState.types.numeric= isOn
    console.log(`Numeric Switch isOn: ${isOn}`)

  }
   //check and handle Special Characters switch
   if (switchId === "switch4") {
    appState.types.soecialCharacters = isOn
    console.log(`SpecialCharacters Switch isOn: ${isOn}`)

   }

}


 
 lowercaseSwitch.addEventListener("change", toggleSwitch)
 uppercaseSwitch.addEventListener("change", toggleSwitch)
 numericSwitch.addEventListener("change", toggleSwitch)
 specialCharacterSwitch.addEventListener("change", toggleSwitch)

/**
 * Password Generator
 */




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
/**
 * Generate password algo
 * 1. Grab data from appstate
 * 2. Randomly generate a string based on password legth
 * 3. If password require lowercase ensure at least one character with lowercase
 * 4. if password requires uppercase make sure at least one character with uppercase
 * 5. If pass requires numeric character ensure at least 1 character numeric
 * 6.If pass requires special character ensure at least 1 character with special 
 */
function generatePassword(){
  let lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  let upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '0123456789'
  let specialCharacters = `!"#$%&'()*+,-./:;<=>?@[\]^_|~`

  //1. 
  let passwordLength = appState.passwordLength
  let lowercase = appState.lowercase
  let uppercase = appState.uppercase
  let numeric = appState.numeric
  let specialCharacter = appState.specialCharacter

  var password = ""
  //2.
for (var i = 0; i < passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * lowerCaseAlphabet.length)
  password += lowerCaseAlphabet[randomNumber]
  console.log(lowerCaseAlphabet[randomNumber])
}


  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

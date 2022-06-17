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
 * Generate Password Algorithm
 * 1. Grab our data from out app state
 * 2. randomly generate a string based on password length
 * 3. if password requires lowercase ensure at least one character is lower case
 * 4. if password requires uppercase ensure at least one character is upper case
 * 5. if password requires numeric character ensure at least one character is numeric
 * 6. if password requires special character ensure at least one character is special
 */

 function generatePassword() {
  let lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  let uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '0123456789'
  let specialCharacters = `!"#$%&'()*+,-./:;<=>?@[\]^_|~`

  //1. 
  let passwordLength = appState.passwordLength
  let lowercase = appState.types.lowercase
  let uppercase = appState.types.uppercase
  let numeric = appState.types.numeric
  let specialCharacter = appState.types.specialCharacter

  //Requirements
  var requirements = 0
  var characterLists = []
  if (lowercase) {
    requirements += 1
    characterLists.push(lowercaseAlphabet)
  }

  if (uppercase) {
    requirements += 1
    characterLists.push(uppercaseAlphabet)
  }

  if (numeric) {
    requirements += 1
    characterLists.push(numbers)
  }

  if (specialCharacter) {
    requirements += 1
    characterLists.push(specialCharacters)
  }

  var password = ""

  //Check Flags
  var passed = 0
  var hasLowercase = false
  var hasUppercase = false
  var hasNumeric = false
  var hasSpecialCharacter = false

  //2.
  for(var i = 0; i < passwordLength; i++) {

    if (passed != requirements) {

      if (lowercase && !hasLowercase) {

        let randomNumber = Math.floor(Math.random() * lowercaseAlphabet.length)
        password += lowercaseAlphabet[randomNumber]
        hasLowercase = true
        passed += 1 

      } else if (uppercase && !hasUppercase) {

        let randomNumber = Math.floor(Math.random() * uppercaseAlphabet.length)
        password += uppercaseAlphabet[randomNumber]
        hasUppercase = true
        passed += 1

      } else if (numeric && !hasNumeric) {

        let randomNumber = Math.floor(Math.random() * numbers.length)
        password += numbers[randomNumber]
        hasNumeric = true
        passed += 1

      } else if (specialCharacter && !hasSpecialCharacter) {

        let randomNumber = Math.floor(Math.random() * specialCharacters.length)
        password += specialCharacters[randomNumber]
        hasSpecialCharacter = true
        passed += 1

      }

    } else {
      password = generateRandomPasswordFromList(password, characterLists)
    }
  }

  return password
}

function generateRandomPasswordFromList(password, list) {
  console.log(`List: ${list}`)
  let randomIndex = Math.floor(Math.random() * list.length)
  let randomList = list[randomIndex]
  let randomNumber = Math.floor(Math.random() * randomList.length)
  password += randomList[randomNumber]
  console.log(`Random Index: ${randomIndex} - Random List: ${randomList} - Random Number: ${randomNumber} - Random Character: ${randomList[randomNumber]}`)
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

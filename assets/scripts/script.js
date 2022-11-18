// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  // Choose password length
  let passwordLength = getPasswordLength();
  // Choose character set - lower, upper, num, special
  let characterSet = getCharacterSet();
  // Default character set
  // Generate password
  // Display password prompt or on site
}

function getPasswordLength()
{
  let userInput;

  while (userInput < 8 || userInput > 128 || isNaN(userInput))
  {
    userInput = prompt("Enter password length (8 - 128)");
    if (checkForNull(userInput))
    {
      // Cancel button was clicked
      break;
    }
  }

  return userInput;
}

function getCharacterSet()
{
  let userArr = [];


  userArr.push(askUser("Include LOWERCASE characters? y/n"));
  userArr.push(askUser("Include UPPERCASE characters? y/n"));
  userArr.push(askUser("Include NUMBERS? y/n"));
  userArr.push(askUser("Include SPECIAL characters? y/n"))




  console.log(userArr)
}

function askUser(message)
{
  let userInput = "";
  while (true)
  {
    userInput = prompt(message);
    if (checkForNull(userInput))
    {
      // Cancel button was clicked
      break;
    }

    userInput = userInput.toLowerCase().split('', 1).toString();

    if (userInput === 'y')
    {
      return true;
    } else if (userInput === 'n')
    {
      return false;
    }
  }
}

function checkForNull(valueToCheck)
{
  if (valueToCheck === null)
  {
    return true;
  }
  else
  {
    return false;
  }
}
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to Generate Password button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword()
{
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword()
{
  let passLen = getPasswordLength();
  if (checkForNull(passLen))
  {
    // Cancel button was clicked - Stop password generation process    
    return 'Password generation cancelled.\n\nClick the Generate Password button to restart.';
  }

  let charSet = getCharacterSelections();
  if (checkForNull(charSet))
  {
    // Cancel button was clicked - Stop password generation process
    return 'Password generation cancelled.\n\nClick the Generate Password button to restart.';
  }

  // Each loop randomly selects a character from the charSet string to build the new password
  let newPassword = '';
  for (let i = 0; i < passLen; i++)
  {
    newPassword += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return 'Your Secure Password:\n' + newPassword;
}

// Returns user selected password length
function getPasswordLength()
{
  let userInput;

  // Loop until validated password length is returned or user cancels
  while (true)
  {
    userInput = prompt("Enter password length (8 - 128)");
    if (checkForNull(userInput))
    {
      // Cancel button was clicked - Return to calling function
      return;
    }

    // Validate user input - check for empty, characters other than numbers, numbers starting with zero (010), and numbers outside the acceptable range
    if (userInput === '' || isNaN(userInput) || userInput.split('', 1) == 0 || userInput < 8 || userInput > 128) 
    {
      // Loop continues
      window.alert('Oops, Something went wrong.\nEnter a number from 8 to 128.');
    } else
    {
      return userInput;
    }
  }
}

// Gets user input for character selections and returns the built character set
function getCharacterSelections()
{
  let userArr = [];
  let messages = ["Include LOWERCASE characters? y/n", "Include UPPERCASE characters? y/n", "Include NUMBERS? y/n", "Include SPECIAL characters? y/n"];

  // Loop until userArr has at least one character set confirmation 
  while (true)
  {
    // Loop until an answer is provided for all message prompts
    for (let i = 0; i < messages.length; i++)
    {
      // Loop until a (y) or (n) is provided for each message prompt or user cancels
      while (true)
      {
        let userInput = prompt(messages[i]);
        if (checkForNull(userInput))
        {
          // Cancel button was clicked - Return to calling function
          return;
        }

        // Convert user input to lowercase, split first character off, and convert to string (for comparison operations)
        userArr[i] = userInput.toLowerCase().split('', 1).toString();
        if (userArr[i] === 'y' || userArr[i] === 'n')
        {
          // Accepts any input that begins with a (y) or an (n) and breaks this loop to start next parent iteration
          break;
        } else 
        {
          // This loop continues until acceptable input is provided
          window.alert('Oops, Something went wrong.\nType (y)es or (n)o.')
        }
      }
    }

    // After a (y) or (n) is provided for each message ensure user selected at least one character set
    if (!userArr.includes('y'))
    {
      // userArr doesn't contain a (y) so restart this loop
      window.alert('Oops, Something went wrong.\nChoose at least one character set.');
    } else
    {
      break;
    }
  }

  // Pass users selections to character set builder and return results
  return getCharSet(userArr);
}

// Returns the built character set based on users selections
function getCharSet(arrValues)
{
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '1234567890';
  let specials = ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  let charArr = ['abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(), '1234567890', ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~']
  let charSet = '';

  // Loop through the user provided selections
  for (let i = 0; i < arrValues.length; i++)
  {
    // Match user provided answers of 'y' with the corresponding character set and concatenate to charSet
    if (arrValues[i] == 'y')
    {
      charSet += charArr[i];
    }
  }

  // Return string of built character set
  return charSet;
}

// Checks provided value for null or undefined
function checkForNull(valueToCheck)
{
  if (valueToCheck == null)
  {
    return true;
  }
  else 
  {
    return false;
  }
}
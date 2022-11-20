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
  let passLen = getPasswordLength();
  if (checkForNull(passLen))
  {
    // Cancel button was clicked    
    return 'Password generation cancelled.\n\nClick the Generate Password button to restart.';
  }

  let charSet = getCharacterSelections();
  if (checkForNull(charSet))
  {
    // Cancel button was clicked    
    return 'Password generation cancelled.\n\nClick the Generate Password button to restart.';
  }

  let newPassword = '';
  for (let i = 0; i < passLen; i++)
  {
    newPassword += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return 'Your Secure Password:\n' + newPassword;


}

function getPasswordLength()
{
  let userInput;

  while (true)
  {
    userInput = prompt("Enter password length (8 - 128)");

    if (checkForNull(userInput))
    {
      // Cancel button was clicked    
      return;
    }

    if (userInput === '' || userInput < 8 || userInput > 128 || isNaN(userInput) || userInput.split('', 1) == 0)
    {
      window.alert('Oops, Something went wrong.\nEnter a number from 8 to 128.');
    } else
    {
      return userInput;
    }
  }
}

function getCharacterSelections()
{
  let userArr = [];
  let messages = ["Include LOWERCASE characters? y/n", "Include UPPERCASE characters? y/n", "Include NUMBERS? y/n", "Include SPECIAL characters? y/n"];

  while (true)
  {
    for (let i = 0; i < messages.length; i++)
    {
      while (true)
      {
        let userInput = prompt(messages[i]);

        if (checkForNull(userInput))
        {
          // Cancel button was clicked
          return;
        } else

          userArr[i] = userInput.toLowerCase().split('', 1).toString();

        if (userArr[i] === 'y' || userArr[i] === 'n')
        {
          break;
        } else 
        {
          window.alert('Oops, Something went wrong.\nType (y)es or (n)o.')
        }
      }
    }

    if (!userArr.includes('y'))
    {
      window.alert('Oops, Something went wrong.\nChoose at least one character set.');
    } else
    {
      break;
    }
  }

  return getCharSet(userArr);
}

function getCharSet(arrValues)
{
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '1234567890';
  let specials = ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  let charArr = ['abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(), '1234567890', ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~']
  let charSet = '';

  for (let i = 0; i < arrValues.length; i++)
  {
    if (arrValues[i])
    {
      charSet += charArr[i];
    }
  }

  return charSet;
}

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
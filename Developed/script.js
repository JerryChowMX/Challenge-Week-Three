// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate a password based on user criteria
function generatePassword() {
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must include at least one character type.");
    return ""; // Return an empty string to indicate an error
  }

  var length = parseInt(prompt("Enter password length (8-128 characters):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return ""; // Return an empty string to indicate an error
  }

  var charset = "";
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) charset += "0123456789";
  if (includeSpecial) charset += "!@#$%^&*()_+";

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


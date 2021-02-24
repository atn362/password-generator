// These are the variables that will differ when creating a unique password
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// These are the character availble to the specific variable used to generate said password
character = ["!", "@", "#", "$", "%", "^", "&", "&", "*"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Worked with the tutor to to use a function to convert the existing Lowercase to Uppercase to simplify code
space = [];

var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
  enter = parseInt(prompt("How Many Characters Would You Like In Your Password? Choose Between 8 and 128"));
if (!enter) {
    alert("This Needs A Value");
} else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("You Must Choose Between 8 And 128"));
}else{
  confirmNumber = confirm("Will This Contain Numbers?");
  confirmCharacter = confirm("Will This Contain Characters?");
  confirmUppercase = confirm("Will This Contain Uppercase Letters?");
  confirmLowercase = confirm("Will This Contain Lowercase Numbers?");  
};

if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You Must Choose A Criteria");
}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase){
  choices = character.concat(number, alpha, alpha2);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alpha2);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(alpha, alpha2);
}
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);
}
else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alpha);
}
else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);
}
else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alpha;
}
else if (confirmUppercase) {
  choices = space.concat(alpha2);
};
var password = [];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.Floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
var ps = password.join("");
UserInput(ps);
return ps;
}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
modalCross.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  //console.log("pop-up fermé")
}

//-----first Name-----
let firstName = validationFirst; 
document.getElementById("first").addEventListener("change", validationFirst);
function validationFirst(){
  let firstName = document.getElementById("first").value;  
  if (firstName !== null && firstName.length > 1) {// First Valid
    console.log('le prenom est correct');
  } else {// First InValid
    console.log('le prenom est incorrect');
  }
}
//-----last Name-----
let lastName = validationLast; 
document.getElementById("last").addEventListener("change", validationLast);
function validationLast(){
  let lastName = document.getElementById("last").value;  
  if (lastName !== null && lastName.length > 1) {// First Valid
    console.log('le nom est correct');
  } else {// First InValid
    console.log('le nom est incorrect');
  }
}
//-----emailAdress-----
let email = ValidateEmail;
document.getElementById("email").addEventListener("change", ValidateEmail);
function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value(mailformat))
{
console.log('OK');
}
else
{
console.log('KO');
}
}
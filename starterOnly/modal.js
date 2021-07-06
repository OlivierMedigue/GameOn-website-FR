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

let errorMessages = {
  firstName: "Veuillez entrer 2 caractères ou plus pour le prénom",
  lastName: "Veuillez entrer 2 caractères ou plus pour le prénom",
  email: "Veuillez enter une adresse mail valide",
  birthdate: "Veuillez indiquer une date de naissance",
  quantity: "Veuillez indiquer un nombre entre 0 et 99",
  location: "Veuillez sélectionner une ville",
  condition: "Veuillez accepter la condition",
}
  

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
modalCross.addEventListener("click", function(){
  modalbg.style.display = "none";
  //console.log("pop-up fermé")
})


//-----first Name-----

let isFirstNameCorrect = false;
document.getElementById("first").addEventListener("keypress", function(){
  const errorFirst = document.getElementById("first-Error");
  let firstName = document.getElementById("first").value;  
  if (firstName !== null && firstName.length >= 1) {// First Valid
    console.log('le prenom est correct');
    errorFirst.innerText="";
    errorFirst.parentNode.removeAttribute("data-error-visible");
    isFirstNameCorrect=true;
  }else {// First InValid
    console.log('le prenom est incorrect');
    errorFirst.parentNode.addAttribute("data-error", errorMessages.first);
    errorFirst.parentNode.addAttribute("data-error-visible", "true");    
  }
})
// function errorMessa(errorMessages){
//   const message = document.createElement("span");
//   message.innerText = errorMessa;
//   document.querySelector('#formData .last').appendChild(message);
// }
// errorMessa(errorMessages.lastName);

//-----last Name-----
let isLastNameCorrect = false;
document.getElementById("last").addEventListener("keypress", function(){
  const errorLast = document.getElementById("last-Error");
  let lastName = document.getElementById("last").value;  
  if (lastName !== null && lastName.length >= 1) {// Last Valid
    console.log('le nom est correct');
    isLastNameCorrect=true;
    errorLast.innerText="";
    errorLast.parentNode.removeAttribute("data-error-visible");
  } else {// Last InValid
    console.log('le nom est incorrect');
    errorLast.parentNode.addAttribute("data-error", errorMessages.last);
    errorLast.parentNode.addAttribute("data-error-visible", "true");    
  }
})

//-----emailAdress-----

let isEmailCorrect = false;
document.getElementById("email").addEventListener("keypress", function(){
  let email = document.getElementById("email").value;
  const errorEmail = document.getElementById("email-Error");
  const re = /\S+@\S+\.\S+/;
  if (re.test(email) === true) {
    console.log("L'email entré est bon")
    isEmailCorrect=true;
    errorEmail.innerText="";
    errorEmail.parentNode.removeAttribute("data-error-visible");
  } else {
    console.log("L'email entré n'est pas bon")
    errorEmail.parentNode.addAttribute("data-error", errorMessages.email);
    errorEmail.parentNode.addAttribute("data-error-visible", "true");    
  }
})

//-----Birthdate-----

let isBirthdateCorrect = false;
document.getElementById("birthdate").addEventListener("click", function(){
  let ddmmyy = document.getElementById("birthdate").value;
  const errorBirthdate = document.getElementById("birthdate-Error");
  if (ddmmyy !== "") {// Birthdate Valid
    console.log('la date est valide');
    isBirthdateCorrect=true;
    errorBirthdate.innerText="";
    errorBirthdate.parentNode.removeAttribute("data-error-visible");
  } else {// Birthdate InValid
    console.log('le date est invalide');
    errorBirthdate.parentNode.addAttribute("data-error", errorMessages.birthdate);
    errorBirthdate.parentNode.addAttribute("data-error-visible", "true");   
  }
})

//-----quantity-----

let isQuantityCorrect = false;
document.getElementById("quantity").addEventListener("keypress", function(){ 
  let myField = document.getElementById("quantity").value;
  const errorQuantity = document.getElementById("quantity-Error");
  if( myField >= 0 && myField < 99 && myField != "")  {
     console.log("quantité OK"); 
     isQuantityCorrect=true;
     errorQuantity.innerText="";
     errorQuantity.parentNode.removeAttribute("data-error-visible");
  }
  else{
    console.log("quantité KO");
    errorQuantity.parentNode.addAttribute("data-error", errorMessages.quantity);
    errorQuantity.parentNode.addAttribute("data-error-visible", "true"); 
  }     
})


//-----location------

let city = document.getElementsByClassName("location");
let isLocationCorrect = false;
for(var i = 0; i < city.length; i++){
  var location = city[i];
  city.addEventListener("click", function(){
    const errorLocation = document.getElementById("radio-Error");
    if(city[i].checked){
      console.log("ville selectionnee");
      isLocationCorrect = true;
      errorLocation.innerText="";
      errorLocation.parentNode.removeAttribute("data-error-visible");
    } else{
      console.log("ville non selectionnee");
      errorLocation.parentNode.addAttribute("data-error", errorMessages.location);
      errorLocation.parentNode.addAttribute("data-error-visible", "true"); 
    }  
  })
}

//-----Checkbox------
let validatedBox = document.getElementById("checkbox1");
let isValidatedBoxCorrect= false;
validatedBox.addEventListener("click", function(){
  const errorCondition = document.getElementById("condition-Error");
  if (validatedBox.checked){
    console.log("condition validee");
    isValidatedBoxCorrect=true; 
    errorCondition.innerText="";
    errorCondition.parentNode.removeAttribute("data-error-visible");
  } else {
    console.log("condition non validee");
    errorCondition.parentNode.addAttribute("data-error", errorMessages.condition);
    errorCondition.parentNode.addAttribute("data-error-visible", "true"); 
  }
})

function checkForm(){
  console.log("Cette fonction est appelée !!!!!!!!")
  let myFormData = new FormData(document.getElementById("my-form"))
  if (isFirstNameCorrect === false || isLastNameCorrect === false || isEmailCorrect === false || isBirthdateCorrect === false || isQuantityCorrect === false || isLocationCorrect === false || isValidatedBoxCorrect === false) {
      console.log("Après vérification en appuyant sur le bouton, le prénom n'est pas bon.")
      return false;
  } else {
      console.log("Après vérification en appuyant sur le bouton, le prénom est bon.")
      return true;
  }
}

document.getElementById("submit-button").addEventListener("click", function(event){
  console.log("On a bien cliqué sur le boutton de submit")
  event.preventDefault() // Permet d'annuler tous les évènvement à cet instant
  checkForm()
})
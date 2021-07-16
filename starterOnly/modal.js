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
const validationPopUp = document.querySelector(".modal-valid");
const closeBtn = document.querySelector(".modal-valid .btn-submit-valid");
const closeCross = document.querySelector(".modal-valid .close");

let errorMessages = {
  firstLastName: "Veuillez entrer 2 caractères ou plus",
  email: "Veuillez entrer une adresse mail valide",
  birthdate: "Veuillez indiquer une date de naissance",
  quantity: "Veuillez indiquer un nombre entre 0 et 99",
  location: "Veuillez sélectionner une ville",
  condition: "Veuillez accepter les termes et conditions.",
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
document.getElementById("first").addEventListener("input", checkFirstName)
function checkFirstName(){
  let firstName = document.getElementById("first")  
  if (firstName.value !== null && firstName.value.length > 1) {
    //console.log('le prenom est correct');
    firstName.parentNode.removeAttribute("data-error")
    firstName.parentNode.removeAttribute("data-error-visible")
    isFirstNameCorrect = true
  } else {
    //console.log('le prenom est incorrect');
    firstName.parentNode.setAttribute("data-error", errorMessages.firstLastName)
    firstName.parentNode.setAttribute("data-error-visible", "true")
    isFirstNameCorrect = false
  }
}

//-----last Name-----
let isLastNameCorrect = false
document.getElementById("last").addEventListener("input", checkLastName)
function checkLastName(){ 
  let lastName = document.getElementById("last")  
  if (lastName.value !== null && lastName.value.length > 1) {
    // console.log('le nom est correct');
    isLastNameCorrect = true
    lastName.parentNode.removeAttribute("data-error")
    lastName.parentNode.removeAttribute("data-error-visible")
  } else {
    // console.log('le nom est incorrect');
    lastName.parentNode.setAttribute("data-error", errorMessages.firstLastName)
    lastName.parentNode.setAttribute("data-error-visible", "true")
    isLastNameCorrect = false   
  }
}

//-----emailAdress-----

let isEmailCorrect = false
document.getElementById("email").addEventListener("input", checkEmail)
function checkEmail(){
  let email = document.getElementById("email")
  const re = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/
  if (re.test(email.value) === true) {
    // console.log("L'email entré est bon")
    isEmailCorrect = true
    email.parentNode.removeAttribute("data-error")
    email.parentNode.removeAttribute("data-error-visible")
  } else {
    // console.log("L'email entré n'est pas bon")
    email.parentNode.setAttribute("data-error", errorMessages.email)
    email.parentNode.setAttribute("data-error-visible", "true")
    isEmailCorrect = false
  }
}

//-----Birthdate-----

let isBirthdateCorrect = false
document.getElementById("birthdate").addEventListener("input",checkBirthdate)
function checkBirthdate(){
  let ddmmyy = document.getElementById("birthdate")
  if (ddmmyy.value !== "") {
    // console.log('la date est valide');
    isBirthdateCorrect = true
    ddmmyy.parentNode.removeAttribute("data-error")
    ddmmyy.parentNode.removeAttribute("data-error-visible")
  } else {
    // console.log('le date est invalide');
    ddmmyy.parentNode.setAttribute("data-error", errorMessages.birthdate)
    ddmmyy.parentNode.setAttribute("data-error-visible", "true")
    isBirthdateCorrect = false
  }
}

//-----quantity-----

let isQuantityCorrect = false
document.getElementById("quantity").addEventListener("input", checkQuantity)
function checkQuantity(){ 
  let myField = document.getElementById("quantity")
  if ( myField.value >= 0 && myField.value <= 99 && myField.value != "")  {
    //  console.log("quantité OK"); 
     isQuantityCorrect = true
     myField.parentNode.removeAttribute("data-error")
     myField.parentNode.removeAttribute("data-error-visible")
  } else {
    // console.log("quantité KO");
    myField.parentNode.setAttribute("data-error", errorMessages.quantity)
    myField.parentNode.setAttribute("data-error-visible", "true")
    isQuantityCorrect = false
  }    
}

//-----location------

let isLocationCorrect = false;
let locations = document.querySelectorAll("input[name=location]")
for(var i = 0; i < locations.length; i++){
 locations[i].addEventListener("click", checkLocations)    
}
function checkLocations(){
  let locations = document.querySelectorAll("input[name=location]")
  for(var i = 0; i < locations.length; i++) {   
    if (locations[i].checked) {      
      locations[i].parentNode.removeAttribute("data-error") 
      locations[i].parentNode.removeAttribute("data-error-visible")
      isLocationCorrect = true
      break
    } else {
      locations[i].parentNode.setAttribute("data-error", errorMessages.location)
      locations[i].parentNode.setAttribute("data-error-visible", "true")
      isLocationCorrect = false
    }
  }
}


//-----Checkbox------
let validatedBox = document.getElementById("checkbox1")
let isValidatedBoxCorrect = false
validatedBox.addEventListener("click", checkValidedBox)
function checkValidedBox(){
  if (validatedBox.checked){
    // console.log("condition validee")
    isValidatedBoxCorrect = true 
    validatedBox.parentNode.removeAttribute("data-error")
    validatedBox.parentNode.removeAttribute("data-error-visible")
  } else {
    // console.log("condition non validee");
    validatedBox.parentNode.setAttribute("data-error", errorMessages.condition)
    validatedBox.parentNode.setAttribute("data-error-visible", "true")
    isValidatedBoxCorrect = false 
  }
}


function checkForm(){
  checkFirstName()
  checkLastName ()
  checkEmail ()
  checkBirthdate()
  checkQuantity ()
  checkLocations ()
  checkValidedBox()
  if (isFirstNameCorrect == false || isLastNameCorrect == false || isEmailCorrect == false || isBirthdateCorrect == false || isQuantityCorrect == false || isLocationCorrect == false || isValidatedBoxCorrect == false) {
    return false
  }else
    return true
}

document.getElementById("submit-button").addEventListener("click", function (e){
  e.preventDefault()
  if (checkForm()){
    validationPopUp.style.display = "block"
    modalbg.style.display = "none"
  }
})

closeBtn.addEventListener("click", function(){
  validationPopUp.style.display = "none"
  document.getElementById("my-form").reset()
  document.location.reload()
})
closeCross.addEventListener("click", function(){
  validationPopUp.style.display = "none"
  document.getElementById("my-form").reset()
  document.location.reload()
})
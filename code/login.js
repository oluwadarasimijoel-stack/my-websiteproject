var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
  document.getElementById("mess").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("mess").style.display = "none";
}

myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}
var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
   var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
if(myInput.value.length >= 6  ) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
 var your = document.getElementById("your")
 var emailerror = document.getElementById("emailerror")



 function validateEmail(){
  
  if(!your.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
    emailerror.innerHTML = "please enter a valid email";
    your.style.borderBottomColor = "red"
    emailerror.style.top = "36%"
    return  false
  }

  emailerror.innerHTML = "";
   your.style.borderBottomColor = "green"
   emailerror.style.top = "35%"
    return  true
 }

  function handleCredentialResponse(response) {
            console.log("Encoded JWT ID token: " + response.credential);
           
        }
        
    
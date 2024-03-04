const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");
togglePassword.addEventListener('click', function (e) { 
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password'; // toggle the type attribute
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye'); // toggle the eye/eye slash icon
});


// Get the modal
var modal = document.getElementById('create');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Password requirements
var myInput = document.getElementById("newPW");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  //create account, submit button
  function ValRedir(event) {
    event.preventDefault();
    let uname = document.getElementById("newUname").value;
    let newpw = document.getElementById("newPW").value;
    let repeatpw = document.getElementById("psw-repeat").value;

    if(uname=="" || newpw=="" || repeatpw==""){
      alert("All fields must be filled out");
      return false;
    }
    if (newpw != repeatpw) {
      alert("Passwords must match");
      return false;
    }
    //Need to add more validation requirements
    return true;
  }

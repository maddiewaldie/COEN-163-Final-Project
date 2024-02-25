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

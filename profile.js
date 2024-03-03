const prefButton = document.querySelector('#preferences');
prefButton.addEventListener('click', function (e) {
  window.location.href = "preferences.html";
}); 

const profileForm = document.getElementById('profile-form');
profileForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Gather form values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const location = document.getElementById('location').value;

  // Update profile elements
  const profileName = document.querySelector('.profile-name');
  const profileEmail = document.querySelector('.profile-email');
  const profilePhone = document.querySelector('.profile-phone');
  const profileLocation = document.querySelector('.profile-location');

  profileName.innerText = `${firstName} ${lastName}`;
  profileEmail.innerText = email;
  profilePhone.textContent = phone;
  profileLocation.textContent = location;

  // Save to local storage
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('location', location); 
});

// Function to load data from local storage 
function loadProfileData() {
  const storedFirstName = localStorage.getItem('firstName');
  const storedLastName = localStorage.getItem('lastName');
  const storedEmail = localStorage.getItem('email');
  const storedPhone = localStorage.getItem('phone');
  const storedLocation = localStorage.getItem('location');

  const profileName = document.querySelector('.profile-name');
  const profileEmail = document.querySelector('.profile-email');
  const profilePhone = document.querySelector('.profile-phone');
  const profileLocation = document.querySelector('.profile-location');

  if (storedFirstName && storedLastName) {
    profileName.innerText = `${storedFirstName} ${storedLastName}`;
    profileEmail.innerText = storedEmail;
    profilePhone.textContent = storedPhone;
    profileLocation.textContent = storedLocation;
  }
}

// Call the function to load profile data on page load
loadProfileData();

const changePhotoButton = document.getElementById('change-photo');
const profilePhoto = document.getElementById('profile-photo');

changePhotoButton.addEventListener('click', function() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';  

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function(event) {
      profilePhoto.src = event.target.result;
      localStorage.setItem('profilePhoto', event.target.result); 
    });

    localStorage.setItem('testKey', 'testValue');
    console.log(localStorage.getItem('testKey')); 

    reader.readAsDataURL(file);
  });

  fileInput.click(); 
});

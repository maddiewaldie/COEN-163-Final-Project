// Purpose: To handle the profile page functionality

const profileForm = document.getElementById('profile-form');
profileForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Gather form values
  const userName = document.getElementById('username').value;
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const location = document.getElementById('location').value;

  // If form values are empty, notify of error, else empty input fields
  if (!userName || !firstName || !lastName || !email || !phone || !location) {
    alert('Please fill out all fields');
    return;
  } else {
    document.getElementById('username').value = '';
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('location').value = '';
  }

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

  // Alert user of successful update
  alert('Profile updated successfully');
});

// Function to load data from local storage 
function loadProfileData() {
  const storedFirstName = localStorage.getItem('firstName');
  const storedLastName = localStorage.getItem('lastName');
  const storedEmail = localStorage.getItem('email');
  const storedPhone = localStorage.getItem('phone');
  const storedLocation = localStorage.getItem('location');
  const storedImagePath = localStorage.getItem('profilePhoto');

  const profileName = document.querySelector('.profile-name');
  const profileEmail = document.querySelector('.profile-email');
  const profilePhone = document.querySelector('.profile-phone');
  const profileLocation = document.querySelector('.profile-location');
  const profilePhoto = document.getElementById('profile-photo');

  if (storedFirstName && storedLastName) {
    profileName.innerText = `${storedFirstName} ${storedLastName}`;
    profileEmail.innerText = storedEmail;
    profilePhone.textContent = storedPhone;
    profileLocation.textContent = storedLocation;
  }

  if (storedImagePath) {
    profilePhoto.src = storedImagePath;
  }
}

// Call the function to load profile data on page load
loadProfileData();

// Function to clear preferences
function clearPreferences() {
  // Reset cat form
  const catForm = document.getElementById('catQualities');
  if (catForm) {
    catForm.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
  }

  // Reset dog form
  const dogForm = document.getElementById('dogQualities');
  if (dogForm) {
    dogForm.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
  }
}

const submitButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel'); // Assuming you have a cancel button

if (submitButton) {
  submitButton.addEventListener('click', function() {
    clearPreferences(); // Call clearPreferences on submit button click
    alert('Profile updated successfully');
  });
}



if (cancelButton) {
  cancelButton.addEventListener('click', function() {
    clearPreferences(); // Call clearPreferences on cancel button click
  });
}

const changePhotoButton = document.getElementById('change-photo');
const profilePhoto = document.getElementById('profile-photo');

changePhotoButton.addEventListener('click', function() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';  

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    // Store the file path for retrieving later
    const reader = new FileReader();
    reader.addEventListener('load', function(event) {
      const imagePath = event.target.result;
      localStorage.setItem('profilePhoto', imagePath); 

      // Update the image src directly
      profilePhoto.src = imagePath;
    });

    reader.readAsDataURL(file);
  });

  fileInput.click(); 
});

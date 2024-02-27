let matches = [];
let currentPetIndex = 1;


let startMouseX;

document.addEventListener('mousedown', handleMouseDown, false);
document.addEventListener('mouseup', handleMouseUp, false);

function handleMouseDown(event) {
    startMouseX = event.clientX;
}

function handleMouseUp(event) {
    const endMouseX = event.clientX;
    const mouseThreshold = 50;
    if (endMouseX < startMouseX - mouseThreshold) {
        handleNo();
    } else if (endMouseX > startMouseX + mouseThreshold) {
        handleYes();
    }
}

function handleNo() {
    showNextPet();
}

function handleYes() {
    saveAsMatch();
    showNextPet();
}

function saveAsMatch() {
    const currentPet = petData.pets[`pet${currentPetIndex}`];
    if (currentPet) {
        matches.push(currentPet);
        console.log(`Pet ${currentPet.petName} saved as a match!`);
    }
}

function showNextPet() {
    const currentPet = petData.pets[`pet${currentPetIndex}`];

    // TODO: Implement logic to show cats/dogs based on user's preferences

    if (currentPet) {
        document.getElementById("animal-photo").src = currentPet.petPhoto;
        document.querySelector(".petName").textContent = currentPet.petName;
        document.querySelector(".petLocation").textContent = currentPet.petLocation;
        document.querySelector(".petInformation").textContent = currentPet.petInformation;
        currentPetIndex++;
    } else {
        document.getElementById("animal-photo").style.display = 'none';
        document.querySelector("#animal-info").style.display = 'none';
        document.getElementById("no-more-pets-message").style.display = 'block';
        document.getElementById("no-more-pets-message").textContent = "There aren't any more pets in your area matching your preferences, but check back soon as more are being added every day!";
    }
}

// Initialize with the first pet
showNextPet();
// At some point, put data in a json or something, but for now is a variable
const petData = {
    "pets": {
        "pet1": {
            "petName": "Mr. Whiskers",
            "petType": "Cat",
            "petSize": "Medium",
            "petAge": "2 years",
            "petEnergyLevel": "High",
            "petLocation": "San Francisco, CA",
            "petInformation": "Hi there! I'm Mr. Whiskers, a playful cat who loves climbing and cuddling. I'm looking for a loving home with plenty of toys and cozy spots. Swipe right to meet me!",
            "petPhoto": "./images/petPhotos/cat1.jpg"
        },
        "pet2": {
            "petName": "Mittens",
            "petType": "Cat",
            "petSize": "Small",
            "petAge": "1.5 years",
            "petEnergyLevel": "Medium",
            "petLocation": "Los Angeles, CA",
            "petInformation": "Meow! I'm Mittens, an adorable cat with a sweet temperament. I enjoy sunny windowsills, feather toys, and being spoiled. Swipe right if you want a furry friend!",
            "petPhoto": "./images/petPhotos/cat2.jpg"
        },
        "pet3": {
            "petName": "Shadow",
            "petType": "Cat",
            "petSize": "Large",
            "petAge": "4 years",
            "petEnergyLevel": "Low",
            "petLocation": "San Jose, CA",
            "petInformation": "Greetings! I'm Shadow, a laid-back cat who loves lounging around and observing the world. Looking for a calm and loving home. Swipe right to make me your companion!",
            "petPhoto": "./images/petPhotos/cat3.jpg"
        },
        "pet4": {
            "petName": "Whisper",
            "petType": "Cat",
            "petSize": "Medium",
            "petAge": "2.5 years",
            "petEnergyLevel": "High",
            "petLocation": "Santa Clara, CA",
            "petInformation": "Hey, I'm Whisper! I'm a playful and talkative cat who enjoys interactive toys and attention. Ready to fill your home with purrs and love. Swipe right to get to know me!",
            "petPhoto": "./images/petPhotos/cat4.jpg"
        },
        "pet5": {
            "petName": "Buddy",
            "petType": "Dog",
            "petSize": "Medium",
            "petAge": "3 years",
            "petEnergyLevel": "High",
            "petLocation": "Palo Alto, CA",
            "petInformation": "Woof! I'm Buddy, an energetic dog who loves fetch and outdoor adventures. I'm friendly and loyal, looking for an active family to join. Swipe right to make me your new best friend!",
            "petPhoto": "./images/petPhotos/dog1.jpg"
        },
        "pet6": {
            "petName": "Charlie",
            "petType": "Dog",
            "petSize": "Small",
            "petAge": "2 years",
            "petEnergyLevel": "Medium",
            "petLocation": "Burlingame, CA",
            "petInformation": "Hello! I'm Charlie, a small dog with a big heart. I enjoy short walks, belly rubs, and lounging on the couch. Swipe right if you're looking for a pint-sized companion!",
            "petPhoto": "./images/petPhotos/dog2.jpg"
        },
        "pet7": {
            "petName": "Max",
            "petType": "Dog",
            "petSize": "Large",
            "petAge": "4 years",
            "petEnergyLevel": "Low",
            "petLocation": "Oakland, CA",
            "petInformation": "Hi there! I'm Max, a gentle giant who loves naptime and gentle strolls. I'm looking for a calm and loving home to spend my days. Swipe right to meet me!",
            "petPhoto": "./images/petPhotos/dog3.jpg"
        },
        "pet8": {
            "petName": "Luna",
            "petType": "Dog",
            "petSize": "Medium",
            "petAge": "2.5 years",
            "petEnergyLevel": "High",
            "petLocation": "Sunnyvale, CA",
            "petInformation": "Woof woof! I'm Luna, a spirited dog who loves playtime and socializing. I'm ready to bring joy and excitement to your home. Swipe right to make me part of your pack!",
            "petPhoto": "./images/petPhotos/dog4.jpg"
        }
    }
};

function toggleMenu() {
    var menu = document.getElementById("menu-dropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function goToProfile() {
    window.location.href = "profile.html";
}

function goToChat() {
    window.location.href = "chat.html";
}

function goToDiscover() {
    window.location.href = "discover.html";
}

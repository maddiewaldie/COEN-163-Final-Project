const chat = () => {
  //eslint-disable-next-line
  const pets = Object.values(petData.pets);
  const messages = document.querySelector("#messages");
  pets.forEach((pet) => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const p = document.createElement("p");

    h2.textContent = pet.petName + ", " + pet.petAge;
    img.src = pet.petPhoto;
    p.textContent = pet.petInformation;

    section.appendChild(h2);
    section.appendChild(img);
    section.appendChild(p);
    section.addEventListener("click", () => {
      setCurrentPet(pet);
      document.querySelector("#chat-container").style.display = "block";
    });

    messages.appendChild(section);
  });
};

const setCurrentPet = (currentPet) => {
  const chatContainer = document.querySelector("#chat-container");
  chatContainer.querySelector("h2").textContent = currentPet.petName;
  chatContainer.querySelector("img").src = currentPet.petPhoto;
};

chat();

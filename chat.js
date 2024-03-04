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
    img.setAttribute("alt", pet.petName);
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

  document.querySelector("#backButton").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#chat-container").style.display = "none";
  });
  document.querySelector("button[type=submit]").addEventListener("click", (e) => {
    sendMessage(e);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  });
};

const setCurrentPet = (currentPet) => {
  const chatContainer = document.querySelector("#chat-container");
  chatContainer.querySelector("h2").textContent = currentPet.petName;
  chatContainer.querySelector("img").src = currentPet.petPhoto;
  chatContainer.querySelector("img").setAttribute("alt", currentPet.petName);

  const iframe =
    document.querySelector("iframe").contentDocument ||
    document.querySelector("iframe").contentWindow.document;
  const chatData = currentPet.petInformation.split(/[.!?]+/);
  const body = iframe.querySelector("body");
  body.innerHTML = "";

  const messages = [];

  chatData.forEach((message) => {
    if (message !== "") {
      const messageInstance = iframe.createElement("section");

      const p = iframe.createElement("p");
      p.textContent = message;

      const img = iframe.createElement("img");
      img.src = currentPet.petPhoto;
      img.setAttribute("alt", currentPet.petName);

      messageInstance.appendChild(img);
      messageInstance.appendChild(p);

      messages.push(messageInstance);
    }
  });

  messages.forEach((message) => {
    body.appendChild(message);
  });
};

const sendMessage = (e) => {
  e.preventDefault();
  const message = document.querySelector("#messageInput").value.trim();
  document.querySelector("#messageInput").value = "";
  if (message === "") {
    return;
  }

  const iframe = document.querySelector("iframe");
  const body = iframe.contentDocument.querySelector("body");

  const messageInstance = document.createElement("section");
  messageInstance.classList.add("user");

  const p = document.createElement("p");
  p.textContent = message;

  const img = document.createElement("img");
  img.src = "images/Profile-pic.png";
  img.setAttribute("alt", "user avatar");

  messageInstance.appendChild(p);
  messageInstance.appendChild(img);

  body.appendChild(messageInstance);

  iframe.contentWindow.scrollTo(0, iframe.contentDocument.body.scrollHeight);
}

chat();

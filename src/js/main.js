import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed("#textTyped", {
  strings: [
    "Assalamu 'alaykum. 👋",
    "Welcome friends رحمكم الله.",
    "This is Reza's personal site. 🌐",
    "Barakallahu fiykum. ✨",
  ],
  typeSpeed: 50,
  loop: true,
  backDelay: 1000,
  cursorChar: "_",
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
});

// navbar shadow
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("shadow-sm");
  }
});

// confetti
const input = document.getElementById("queue");
const btnQueue = document.getElementById("btnQueue");

// counting
const queueNumber = document.getElementById("queueNumber");
const textRemove = document.getElementById("textRemove");
let counter = 0;

const action = () => {
  const inputValue = input.value.trim();

  if (inputValue.length >= 10 && inputValue.includes("@")) {
    const myCanvas = document.createElement("canvas");
    myCanvas.style.position = "fixed";
    myCanvas.style.inset = 0;
    myCanvas.style.width = "100vw";
    myCanvas.style.height = "100vh";
    myCanvas.style.zIndex = -1;
    document.body.appendChild(myCanvas);

    const myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });
    confetti({
      particleCount: 100,
      spread: 160,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.1,
      },
    });
    myCanvas.remove();

    counter++;
    queueNumber.textContent = `Your queue number is ${counter}.`;
    textRemove.remove();
    input.value = "";
  } else if (input.value === "") {
    queueNumber.textContent = `Your input still empty. 😥`;
    textRemove.remove();
  } else {
    queueNumber.textContent = `Make sure your email correct. 🤨`;
    textRemove.remove();
  }
};

input.addEventListener("keydown", (key) => {
  if (key.key === "Enter") {
    action();
  }
});

btnQueue.addEventListener("click", () => {
  action();
});

// playing with navbar
const itemNav = document.querySelectorAll("header nav a");
const cards = document.querySelectorAll("main .card");

itemNav.forEach((item) => {
  item.addEventListener("click", () => {
    const navActive = document.querySelector(".linkActive");

    if (navActive) {
      navActive.classList.remove("linkActive");
    }

    if (!item.classList.contains("linkActive")) {
      item.classList.add("linkActive");
    }

    cards.forEach((card) => {
      card.classList.add("blur-sm");
      if (item.textContent.includes("All")) {
        card.classList.toggle("blur-sm");
      }
    });

    if (item.textContent.includes("About")) {
      const aboutElement = document.getElementById("about");

      if (aboutElement) {
        aboutElement.classList.toggle("blur-sm");
      }
    }

    if (item.textContent.includes("Social")) {
      const instgramElement = document.getElementById("social-1");
      const githubElement = document.getElementById("social-2");
      if (instgramElement) {
        instgramElement.classList.toggle("blur-sm");
      }
      if (githubElement) {
        githubElement.classList.toggle("blur-sm");
      }
    }

    if (item.textContent.includes("Collab")) {
      const collabElement = document.getElementById("queueCollab");
      if (collabElement) {
        collabElement.classList.toggle("blur-sm");
      }
    }
  });
});

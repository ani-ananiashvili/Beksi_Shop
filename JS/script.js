"use strict";

// header section

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.style.transform = "translateY(0)";
  })
);

// dropdown menu
const categoriesLink = document.getElementById("categoriesLink");
const categoriesDropdown = document.getElementById("categoriesDropdown");

categoriesLink.addEventListener("click", (event) => {
  event.preventDefault();
  categoriesDropdown.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (
    !categoriesLink.contains(event.target) &&
    !categoriesDropdown.contains(event.target)
  ) {
    categoriesDropdown.classList.remove("active");
  }
});

// registration

const registrationIcon = document.getElementById("registrationIcon");
const tooltip = registrationIcon.querySelector(".tooltip");
const registrationOverlay = document.getElementById("registrationOverlay");
const closeFormButton = document.getElementById("closeForm");
const video = document.getElementById("lightningVideo");

registrationIcon.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
});

registrationIcon.addEventListener("mouseout", () => {
  tooltip.style.display = "none";
});

registrationIcon.addEventListener("click", (e) => {
  e.preventDefault();
  clearRegistrationFields();
  registrationOverlay.classList.add("active");
  video.pause();
});

function clearRegistrationFields() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
}

closeFormButton.addEventListener("click", () => {
  registrationOverlay.classList.remove("active");
  video.play();
});

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  let valid = true;

  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    valid = false;
    document.getElementById("email").focus();
  }

  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters long and contain at least one letter and one number.";
    valid = false;
    if (valid) {
      document.getElementById("password").focus();
    }
  }

  if (valid) {
    alert("Registration successful!");
    clearRegistrationFields();
    registrationOverlay.classList.remove("active");
    video.play();
  }
});

document.getElementById("email").addEventListener("input", () => {
  document.getElementById("emailError").textContent = "";
});

document.getElementById("password").addEventListener("input", () => {
  document.getElementById("passwordError").textContent = "";
});

document.getElementById("email").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("password").focus();
  }
});

document.getElementById("password").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    registrationForm.dispatchEvent(new Event("submit"));
  }
});

// Lighting animation & Search form function

const videoContainer = document.querySelector(".video-container");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const deleteButton = document.getElementById("deleteButton");

videoContainer.addEventListener("mouseover", () => {
  searchForm.style.display = "block";
});

videoContainer.addEventListener("mouseout", () => {
  searchForm.style.display = "none";
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = searchInput.value.toLowerCase().trim();
  const pages = {
    ring: "rings.html",
    rings: "rings.html",
    "skull ring": "rings.html",
    "skull rings": "rings.html",
    "snake ring": "rings.html",
    "snake rings": "rings.html",
    earring: "earrings.html",
    earrings: "earrings.html",
    "skull earring": "earrings.html",
    "skull earrings": "earrings.html",
    "snake earring": "earrings.html",
    "snake earrings": "earrings.html",
    "sword earring": "earrings.html",
    "sword earrings": "earrings.html",
    necklace: "necklaces.html",
    necklaces: "necklaces.html",
    "skull necklace": "necklaces.html",
    "skull necklaces": "necklaces.html",
    "sword necklace": "necklaces.html",
    "sword necklaces": "necklaces.html",
    "snake necklace": "necklaces.html",
    "snake necklaces": "necklaces.html",
    chain: "chains.html",
    chains: "chains.html",
    "waist chain": "chains.html",
    "waist chains": "chains.html",
    "pant chain": "chains.html",
    "pant chains": "chains.html",
    "brooch chain": "chains.html",
    "brooch chains": "chains.html",
    brooch: "chains.html",
  };

  const page = Object.keys(pages).find((key) => input.includes(key));

  if (page) {
    window.location.href = pages[page];
  }
});

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchForm.dispatchEvent(new Event("submit"));
});

deleteButton.addEventListener("click", () => {
  searchInput.value = "";
});

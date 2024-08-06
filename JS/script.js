"use strict";

// header section

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

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
  registrationOverlay.classList.add("active");
  video.pause();
});

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

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 6 characters long and contain at least one letter and one number."
    );
    return;
  }

  alert("Registration successful!");
});

// lighting animation & search

const videoContainer = document.querySelector(".video-container");
const searchForm = document.getElementById("searchForm");

videoContainer.addEventListener("mouseover", () => {
  searchForm.style.display = "block";
});

videoContainer.addEventListener("mouseout", () => {
  searchForm.style.display = "none";
});

// categories section

registrationIcon.addEventListener("click", (e) => {
  e.preventDefault();
  registrationOverlay.classList.add("active");
  video.pause();
});

registrationOverlay.addEventListener("click", (e) => {
  if (e.target === registrationOverlay) {
    registrationOverlay.classList.remove("active");
    video.play();
  }
});

closeFormButton.addEventListener("click", () => {
  registrationOverlay.classList.remove("active");
  video.play();
});

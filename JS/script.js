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

// lighting animation & search

const videoContainer = document.querySelector(".video-container");
const searchForm = document.getElementById("searchForm");

videoContainer.addEventListener("mouseover", () => {
  searchForm.style.display = "block"; 
});

videoContainer.addEventListener("mouseout", () => {
  searchForm.style.display = "none"; 
});


// products section

// Show registration overlay when clicked
registrationIcon.addEventListener("click", (e) => {
  e.preventDefault();
  registrationOverlay.classList.add("active"); // Show the overlay
  video.pause(); // Pause the video when form is displayed
});

// Close the registration overlay when clicking outside the form
registrationOverlay.addEventListener("click", (e) => {
  if (e.target === registrationOverlay) {
    registrationOverlay.classList.remove("active"); // Hide the overlay
    video.play(); // Resume the video when form is closed
  }
});

// Close the registration overlay with the close button
closeFormButton.addEventListener("click", () => {
  registrationOverlay.classList.remove("active"); // Hide the overlay
  video.play(); // Resume the video when form is closed
});


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




// fetch api testing

const imageIds = [529, 884, 861, 882, 526, 891, 1059]; // Array of image IDs
const gallery = document.getElementById('gallery');

// Function to fetch images by ID
function fetchImages(ids) {
    ids.forEach(id => {
        fetch(`https://picsum.photos/id/${id}/info`) // Fetch image info by ID
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                const img = document.createElement('img');
                img.src = data.download_url; // Get the photo URL
                img.alt = `Image ID ${id}`; // Set a descriptive alt text
                gallery.appendChild(img); // Append the image to the gallery
            })
            .catch(error => console.error('Error fetching image:', error)); // Handle errors
    });
}

// Call the function with the array of image IDs
fetchImages(imageIds);


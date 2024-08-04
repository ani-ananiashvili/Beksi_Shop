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

const registrationIcon = document.getElementById('registrationIcon');
  const tooltip = registrationIcon.querySelector('.tooltip');
  const registrationOverlay = document.getElementById('registrationOverlay');
  const closeFormButton = document.getElementById('closeForm');

  registrationIcon.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
  });

  registrationIcon.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });

  registrationIcon.addEventListener('click', (e) => {
    e.preventDefault(); 
    registrationOverlay.style.display = 'flex'; 
  });

  closeFormButton.addEventListener('click', () => {
    registrationOverlay.style.display = 'none'; 
  });



// lighting animation & search 

const videoContainer = document.querySelector('.video-container');
const searchForm = document.getElementById('searchForm');

videoContainer.addEventListener('mouseover', () => {
    searchForm.style.display = 'block'; // Show form on hover
});

videoContainer.addEventListener('mouseout', () => {
    searchForm.style.display = 'none'; // Hide form when not hovering
});

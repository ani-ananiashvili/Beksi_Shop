// registration

"use strict";

export function initializeRegistration() {
  document.addEventListener("DOMContentLoaded", () => {
    const registrationIcon = document.querySelector("#registrationIcon");
    const tooltip = registrationIcon.querySelector(".tooltip");
    const registrationOverlay = document.querySelector("#registrationOverlay");
    const closeFormButton = document.querySelector("#closeForm");
    const video = document.querySelector("#lightningVideo");
    const registrationForm = document.querySelector("#registrationForm");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const togglePassword = document.querySelector("#togglePassword");
    const emailError = document.querySelector("#emailError");
    const passwordError = document.querySelector("#passwordError");

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

    closeFormButton.addEventListener("click", () => {
      registrationOverlay.classList.remove("active");
      video.play();
    });

    registrationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = emailInput.value;
      const password = passwordInput.value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

      let valid = true;

      emailError.textContent = "";
      passwordError.textContent = "";

      if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
        emailInput.focus();
      }

      if (!passwordRegex.test(password)) {
        passwordError.textContent =
          "Password must be at least 6 characters long and contain at least one letter and one number.";
        valid = false;
        if (valid) {
          passwordInput.focus();
        }
      }

      if (valid) {
        alert("Registration successful!");
        clearRegistrationFields();
        registrationOverlay.classList.remove("active");
        video.play();
      }
    });

    emailInput.addEventListener("input", () => {
      emailError.textContent = "";
    });

    passwordInput.addEventListener("input", () => {
      passwordError.textContent = "";
    });

    emailInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        passwordInput.focus();
      }
    });

    passwordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        registrationForm.dispatchEvent(new Event("submit"));
      }
    });

    togglePassword.addEventListener("click", () => {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      togglePassword.classList.toggle("fa-eye");
      togglePassword.classList.toggle("fa-eye-slash");
    });

    togglePassword.classList.add("fa-eye-slash");

    function clearRegistrationFields() {
      emailInput.value = "";
      passwordInput.value = "";
      emailError.textContent = "";
      passwordError.textContent = "";
    }
  });
}

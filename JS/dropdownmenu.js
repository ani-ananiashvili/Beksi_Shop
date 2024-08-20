// drop down menu for category

"use strict";

export function initializeDropdownMenu() {
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
}

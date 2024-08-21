"use strict";

import { initializeImageFetch } from "./fetchAPI.js";
import { initializeHamburgerMenu } from "./hamburger.js";
import { initializeDropdownMenu } from "./dropdownmenu.js";
import { initializeRegistration } from "./registration.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeImageFetch();
  initializeHamburgerMenu();
  initializeDropdownMenu();
  initializeRegistration();
});

"use strict";

import { initializeHamburgerMenu } from "./hamburger.js";
import { initializeDropdownMenu } from "./dropdownmenu.js";
import { initializeRegistration } from "./registration.js";
import { initializeSearch } from "./search.js";
import { initializeImageFetch } from "./fetchAPI.js";
import { initializeFilter } from "./filter.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeHamburgerMenu();
  initializeDropdownMenu();
  initializeRegistration();
  initializeSearch();
  initializeImageFetch();
  initializeFilter();
});

"use strict";

export function initializeSearch() {
  const videoContainer = document.querySelector(".video-container");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const deleteButton = document.getElementById("deleteButton");

  if (!videoContainer || !searchForm || !searchInput || !searchButton || !deleteButton) {
    console.error("One or more elements for the search functionality are missing.");
    return;
  }

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
}
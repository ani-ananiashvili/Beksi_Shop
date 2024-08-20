// blog page - Fetch API

"use strict";

export function initializeImageFetch() {
  const initialImageIds = [742, 552, 618, 878, 1064, 47, 363, 939];
  const additionalImageIds = [942, 240, 68, 272, 945, 356, 781, 358];
  const photoContainer = document.querySelector(".photo-container");
  const showMoreButton = document.getElementById("showMoreButton");
  const loadingIndicator = document.createElement("div");

  loadingIndicator.textContent = "Loading images...";
  loadingIndicator.style.display = "none";
  photoContainer.appendChild(loadingIndicator);

  async function fetchImages(ids) {
    loadingIndicator.style.display = "block";
    const promises = ids.map(async (id) => {
      try {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/id/${id}/300`;
        img.alt = `Image ID ${id}`;
        photoContainer.appendChild(img);
      } catch (error) {
        console.error(`Error fetching image with ID ${id}:`, error);
      }
    });

    await Promise.all(promises);
    loadingIndicator.style.display = "none";
  }

  (async () => {
    await fetchImages(initialImageIds);
  })();

  showMoreButton.addEventListener("click", async () => {
    await fetchImages(additionalImageIds);
    showMoreButton.disabled = true;
    showMoreButton.textContent = "No More Images";
  });
}

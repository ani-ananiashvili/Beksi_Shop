"use strict";

// Categories Pages

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = $(".gallery").isotope({
    itemSelector: ".item",
    layoutMode: "fitRows",
  });

  const buttonGroup = $(".button-group");
  const showMoreButton = document.querySelector(".show-more");
  const detailModal = $("#detailModal");
  const modalImage = $("#modalImage");
  const priceText = $("#price");
  const sizeText = $("#size");

  buttonGroup.on("click", ".button", function () {
    buttonGroup.find(".button").removeClass("active");
    $(this).addClass("active");

    const filterValue = $(this).data("filter");
    galleryContainer.isotope({ filter: filterValue });
  });

  $(".gallery").on("click", ".overLay a", function (event) {
    event.preventDefault();

    const { src: imgSrc } = $(this).closest(".item").find("img")[0];
    const price = $(this).closest(".item").data("price");
    const size = $(this).closest(".item").data("size");

    modalImage.attr("src", imgSrc);
    priceText.text(`Price: ${price}`);
    sizeText.text(`Size: ${size}`);

    detailModal.show();
  });

  $("#closeModal").on("click", () => detailModal.hide());
  $(window).on("click", (event) => {
    if ($(event.target).is(detailModal)) {
      detailModal.hide();
    }
  });

  const disableButton = () => showMoreButton.classList.add("disabled");
  const enableButton = () => showMoreButton.classList.remove("disabled");

  showMoreButton.addEventListener("click", () => {
    disableButton();
  });
});

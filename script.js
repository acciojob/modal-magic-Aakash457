
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

openModal.addEventListener("click", function () {
  modalOverlay.style.display = "flex";
});

closeModal.addEventListener("click", function () {
  modalOverlay.style.display = "none";
});

modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

const modalCloseIcon = document.querySelector(".modal-close");
const modalBtn = document.querySelector(".modal-btn");
const modalContainer = document.querySelector(".modal-container");

//reset
modalContainer.style.display = "none";

//eventlisteners
modalBtn.addEventListener('click', function () {
    modalContainer.style.display = "flex";
})
modalCloseIcon.addEventListener('click', function () {
    modalContainer.style.display = "none";
})

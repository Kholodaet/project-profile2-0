const refs = {
    openModalBtn: document.querySelector(".btn"),
    closeModalBtn: document.querySelector(".js-close-modal"),
    modal: document.querySelector(".back"),
  };
  
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle("visually-hidden");
  
  }
const initSaveContact = () => {
  const saveContactButton = document.querySelector('.save-as-contact');
  const saveForm = document.querySelector('.save-contact-container');
  const submitButton = document.querySelector('.submit-contact-button');
  const savingAddress = document.getElementById('transaction_receiving_address_id');
  const contactAddress = document.querySelector('.contact-address');
  if (saveContactButton) {
    saveContactButton.addEventListener("click", (event) => {
    contactAddress.value = savingAddress.value;
    saveForm.classList.toggle("d-none");
    });
  }
  if (submitButton) {
    console.log("submit btn there!")
    submitButton.addEventListener("click", (event) => {
      console.log("create contact!")
    saveForm.classList.add("d-none");
    });
  }

};


export { initSaveContact }

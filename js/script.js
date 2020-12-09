let closeButtonArray = document.querySelectorAll('.close-btn');
for (const button of closeButtonArray) {
  button.addEventListener('click', function () {
    CloseAllModal();
  })
}

let loginLinks = document.querySelectorAll('.login-link');
for (const link of loginLinks) {
  link.addEventListener('click', function () {
    CloseAllModal();
    OpenModal('login-modal', 'flex');
  })
}

let registerLinks = document.querySelectorAll('.register-link');
for (const link of registerLinks) {
  link.addEventListener('click', function () {
    CloseAllModal();
    OpenModal('register-modal', 'flex');
  })
}

let contactLinks = document.querySelectorAll('.contact-link');
for (const link of contactLinks) {
  link.addEventListener('click', function () {
    CloseAllModal();
    OpenModal('contact-modal', 'flex');
  })
}

let newsletterLinks = document.querySelectorAll('.newsletter-link');
for (const link of newsletterLinks) {
  link.addEventListener('click', function () {
    CloseAllModal();
    OpenModal('newsletter-modal', 'flex');
  })
}

let aboutLinks = document.querySelectorAll('.about-link');
for (const link of aboutLinks) {
  link.addEventListener('click', function () {
    CloseAllModal();
    OpenModal('about-modal', 'flex');
  })
}

document.querySelectorAll('.menu-btn')[0].addEventListener('click', function () {
  CloseAllModal();
  OpenModal('menu-modal', 'flex');
})

function OpenModal(modalId, displayValue) {
  console.log(modalId + displayValue);
  let modalElement = document.getElementById(modalId);
  modalElement.style.display = displayValue;
}

function CloseAllModal() {
  let modalArray = document.querySelectorAll('.modal');
  for (const modal of modalArray) {
    if (modal.style.display != 'none') {
      modal.style.display = 'none';
    }
  }
}
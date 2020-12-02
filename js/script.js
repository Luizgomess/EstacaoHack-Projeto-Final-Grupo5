document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('login-modal').style.display = 'none';
});

let loginLinks = document.querySelectorAll('.login-link');
for (const link of loginLinks) {
  link.addEventListener('click', function() {
    OpenModal('login-modal', 'flex');
  })
}

let registerLinks = document.querySelectorAll('.register-link');
for (const link of registerLinks) {
  link.addEventListener('click', function() {
    OpenModal('register-modal', 'flex');
  })
}

function OpenModal(modalId, displayValue) {
  let modalElement = document.getElementById(modalId);
  modalElement.style.display = displayValue;
}

function CloseAllModal() {
  document.querySelectorAll('.modal').style.display = 'none';
}
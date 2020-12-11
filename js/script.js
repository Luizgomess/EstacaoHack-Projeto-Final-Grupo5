const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
const tlClose = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 0.5 } })

let closeButtonArray = document.querySelectorAll('.close-btn');
for (const button of closeButtonArray) {
  button.addEventListener('click', function () {
    CloseAllModal();
  })
}

let registerLinks = document.querySelectorAll('.register-link');
for (const link of registerLinks) {
  link.addEventListener('click', function () {
    CloseAllModal();
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (vw < 1024) {
      OpenModalMobile('register-modal');
    } else {
      OpenModal('register-modal');
    }
  })
}

function OpenModalMobile(modalId) {
  CloseAllModal();
  let modalElement = document.getElementById(modalId);
  modalElement.classList.add("show__menu");
  modalElement.classList.remove("hide__menu");
}

function CloseAllModal() {
  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  let modalArray = document.querySelectorAll('.modal');
  
  if (vw < 1024) {
    for (const modal of modalArray) {
      if (modal.classList.contains('show__menu')) {
        modal.classList.remove("show__menu");
        modal.classList.add("hide__menu");
      }
    }
  } else {
    for (const modal of modalArray) {
      if (modal.classList.contains('displayed')) {
        tlClose.to(modal, { backgroundColor: 'rgba(0, 0, 0, 0)' })
          .to(modal, { x: '2000px' })
  
        modal.classList.remove("displayed");
      }
    }
  }
}


//Animações do Modal Desktop
function OpenModal(modalId) {
  CloseAllModal();
  let modalElement = document.getElementById(modalId);
  modalElement.classList.add("displayed");
  if (modalId == 'register-modal') {

    setTimeout(() => {
      OpenAnimation(modalId);
      let modalElement = document.getElementById(modalId);
      modalElement.classList.add("displayed");
    }, 1000)
  } else {
    OpenAnimation(modalId);
  }
}

function OpenAnimation(modalId) {
  tl.to('#' + modalId, { x: '0' })
        .from('.modal-container', { width: 0, height: 0 }, "-=1")
        .to('#' + modalId, { backgroundColor: 'rgba(0, 0, 0, 0.35)' }, '-=0.25')
        .from('#' + modalId + ' .seq', { y: -30, opacity: 0, stagger: 0.2, duration: 0.25 }, '-=1')
}

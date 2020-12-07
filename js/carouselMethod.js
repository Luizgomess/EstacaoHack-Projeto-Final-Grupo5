let looks = document.querySelector('#container-looks');
let width = window.innerWidth;
var clientWidth = looks.clientWidth;

    
if(clientWidth < 900) {
    looks.classList.toggle('container-carousel')
    console.log('funciona')
} 

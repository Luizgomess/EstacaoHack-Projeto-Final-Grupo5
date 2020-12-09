var body = document.querySelector('body');
let looks = document.querySelector('#container-looks');
let width = window.innerWidth;
var clientWidth = body.clientWidth;
    
function beCarousel() {
        looks.classList.toggle('container-carousel')
        console.log('funciona')
}

function notCarousel() {
    looks.classList.remove('container-carousel')
    console.log('funciona nao carrossel')
    
}

function carousel (){
    if(clientWidth < 900) {
        beCarousel()
    } else if (clientWidth >= 900) {
        notCarousel()
    } else {
        console.log('deu erro papai')
    }
}





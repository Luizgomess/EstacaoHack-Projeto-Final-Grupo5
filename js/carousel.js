function responsiveSlider() {
  const body = document.querySelector('body')
  let containerSlider = document.querySelector('#slideshow-container')
  let slideItem = document.querySelector('#mySlides')
  let w = body.clientWidth;

  if (w > 900){
    containerSlider.classList.remove('slideshow-container')
    containerSlider.classList.add('substituir')
    console.log(slideItem)
  } else if (w < 800) {
    slideItem.classList.add('meupau')
  } else {
    console.log('erro caralhooooooooo')
  }
}

responsiveSlider()


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

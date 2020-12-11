      
function first()
{
  fetch('https://swapi.dev/api/starships/3/')
  .then(response => response.json())
  .then(all => {
    for (var i in all) {
      if (i == "results")
      {
        for (var j in all[i])
        {
          
        }
      }
});
}

function displayData() {

  fetch('https://swapi.dev/api/starships/3/')
  .then(response => response.json())
  .then(data => {
    for (var key in data) {
          item = document.getElementById(key);
          item.innerHTML = data[key] + "";
    }
  });
    document.getElementById("title").style.display = "none";
    document.getElementById("ship-data").style.display = "block";
    document.getElementById("first-slide").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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


// این تابع تابع اصلی فتچ کردن و نمایش اطلاعات هر سفینه است
// در نمایش اسم فیام ها و خلبان ها مشکلی در نمایش اسم آن ها وجود داشت 
// با وجد اینکه با نمایش آنها در کنسول متوجه خواهید شد که محتوای آنها به درست فتچ و انتخاب شده
function displayData(num) {
  
  fetch('https://swapi.dev/api/starships/'+ num +'/')
  .then(response => response.json())
  .then(data => {
    document.getElementById("ship_title").innerHTML = data.name;
    for (var key in data) {
          if (key == 'films'){
            item = document.getElementById(key);
            item.innerHTML = "films";
            for (key2 in data[key])
            {
              fetch(data[key][key2])
              .then(response => response.json())
              .then(film_data => {
                item.innerHTML = film_data.title + item.innerHTML;
                console.log(item.innerHTML);
              });
            }
          }
          else{
            if (key == 'pilots'){
              item = document.getElementById(key);
              item.innerHTML = "pilots";
              for (key2 in data[key])
              {
                fetch(data[key][key2])
                .then(response => response.json())
                .then(film_data => {
                  item.innerHTML = film_data.title + item.innerHTML;
                  console.log(item.innerHTML);
                });
              }
            }
            else{
              item = document.getElementById(key);
              item.innerHTML = key + " : " + data[key];
            }
            
          }
         
    }
  });
  
    document.getElementById("title").style.display = "none";
    if (document.getElementById("first-slide").style.display != "none"){
      document.getElementById("first-slide").style.display = "block";
    }
    document.getElementById("ship-data").style.display = "block";
    
}


//این بخش هم مریوط به توابع تغییر بین اسلاید ها است
// هر اسلاید یک عدد دارد که با کلیک بر روی آیکون های چپ و راست عدد اسلاید فعال تغییر می کند
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// این تابع تایع اصلی نمایش و عدم نمایش هر اسلاید است
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
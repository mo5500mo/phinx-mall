$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    rtl:true,
    center:true,
    smartSpeed:500,
    items:1
})

var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){window.setTimeout(callback, 1000/60)};
function loop() {

  document.querySelectorAll('.scale').forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('scale-visible');
    }
  });
  document.querySelectorAll('.right').forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('right-visible');
    }
  });
  document.querySelectorAll('.left').forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('left-visible');
    }
  });
  document.querySelectorAll('.down').forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('down-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 &&
      rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
// ===serveice2 section=== //
let menuL = document.getElementById("js-list").getElementsByTagName("li");
let img1 = "<img class = 'serveice2__img--style' src='content/assets/imgs/serveices/featured-1.png'>";
let img2 = "<img class = 'serveice2__img--style' src='content/assets/imgs/serveices/featured-2.png'>";
let img3 = "<img class = 'serveice2__img--style' src='content/assets/imgs/serveices/featured-3.png'>";
let img4 = "<img class = 'serveice2__img--style' src='content/assets/imgs/serveices/featured-4.png'>";
let servreic2__img = document.getElementById("serveice2__img");

function image1(){
  servreic2__img.innerHTML=img1;
  for(let i = 0;i<menuL.length;i++){
    menuL[i].classList.remove("selected");
  }
  menuL[0].classList.add("selected"); 
}
function image2(){
  servreic2__img.innerHTML=img2;
  for(let i = 0;i<menuL.length;i++){
    menuL[i].classList.remove("selected");
  }
  menuL[1].classList.add("selected"); 
}
function image3(){
  servreic2__img.innerHTML=img3;
  for(let i = 0;i<menuL.length;i++){
    menuL[i].classList.remove("selected");
  }
  menuL[2].classList.add("selected"); 
}
function image4(){
  servreic2__img.innerHTML=img4;
  for(let i = 0;i<menuL.length;i++){
    menuL[i].classList.remove("selected");
  }
  menuL[3].classList.add("selected"); 
}
// ===end serveice2 section=== //

// ===portfolio section=== //

let menuL2 = document.getElementById("js-list2").getElementsByTagName("li");

function first(){
  for(let i = 0;i<menuL2.length;i++){
    menuL2[i].classList.remove("selected2");
  }
  menuL2[0].classList.add("selected2"); 
}
function mob(){
  for(let i = 0;i<menuL2.length;i++){
    menuL2[i].classList.remove("selected2");
  }
  menuL2[1].classList.add("selected2"); 
}
function wear(){
  for(let i = 0;i<menuL2.length;i++){
    menuL2[i].classList.remove("selected2");
  }
  menuL2[2].classList.add("selected2"); 
}
function food(){
  for(let i = 0;i<menuL2.length;i++){
    menuL2[i].classList.remove("selected2");
  }
  menuL2[3].classList.add("selected2"); 
}
// ===end portfolio section=== //











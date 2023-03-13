

const myHeader= document.querySelector("#header");
const myNav= document.querySelector(".navbar");

console.log(myNav);
console.log(myHeader);
window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY;
  if (lastPosition > 450 ) {
      myNav.classList.add('fixedNav');
      myHeader.classList.remove('padHeader');
      
  } else if (myNav.classList.contains('fixedNav')) {
    
    myNav.classList.remove('fixedNav');
      myHeader.classList.add('padHeader');
      
  }
});


const swiperSlide= document.querySelectorAll(".swiper-slide");
console.log(swiperSlide);


for (let i=0; i <= swiperSlide.length; i++){
    swiperSlide[i].addEventListener("click", myFunction);
};
function myFunction() {
};

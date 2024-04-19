let menu = document.querySelector(".menu");
let navbar = document.querySelector(".header .navbar");
menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
window.onscroll =()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


let LoadMoreBtn = document.querySelector('.package .load-more .btn');
let boxes = document.querySelectorAll('.package .box-container .box');
LoadMoreBtn.onclick = ()=> {
  for(var i = currentitem; i< currentitem + 3; i++){
    boxes[i].style.display="inline-block"
  };
  currentitem+=3;
  if(currentitem>= boxes.length){
    LoadMoreBtn.style.display = "none"
  };
}
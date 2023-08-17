const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
let menuOpen = false;



menuBtn.addEventListener('click',() => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    nav.classList.remove('hidden')
    document.body.style.overflow = "hidden";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.classList.add('hidden')
    document.body.style.overflow = "auto";
    menuOpen = false;
  }
});
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu_close');
      promoactive = document.querySelector('.promo');

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
    promoactive.classList.add('active');
});

close.addEventListener('click', ()=>{
    menu.classList.remove('active');
    promoactive.classList.remove('active');
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('active');
    promoactive.classList.remove('active');
});




const counter = document.querySelectorAll('.work_loading_wrapper_number'),
      lines = document.querySelectorAll('.work_loading_line span');

counter.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})






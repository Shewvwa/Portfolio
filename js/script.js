const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu_close');
      promoactive = document.querySelector('.promo');
      sidepanel = document.querySelector('.sidepanel');

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
    promoactive.classList.add('active');
    sidepanel.classList.add('active');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', ()=>{
    menu.classList.remove('active');
    promoactive.classList.remove('active');
    sidepanel.classList.remove('active');
    document.body.style.overflow = 'auto';
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('active');
    promoactive.classList.remove('active');
    sidepanel.classList.remove('active');
    document.body.style.overflow = 'auto';
});




const counter = document.querySelectorAll('.work_loading_wrapper_number'),
      lines = document.querySelectorAll('.work_loading_line span');

counter.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})






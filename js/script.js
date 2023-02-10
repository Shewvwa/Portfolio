const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu_close');

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
});

close.addEventListener('click', ()=>{
    menu.classList.remove('active');
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('active');
});

const counter = document.querySelectorAll('.work_loading_wrapper_number'),
      lines = document.querySelectorAll('.work_loading_line span');

counter.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})






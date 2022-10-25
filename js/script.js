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


let isScroll = 0, // доп. проверка
    targetScroll = 400; // расстояние до действия / в px
    
$(window).on('scroll', function(){
  if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
    isScroll = 1;
    $('.sidepanel_text ').css('color', 'black',);
    $('.sidepanel_divider ').css('background-color', 'black');
    $('.sidepanel_svg path ').css('fill', 'black');
    console.info('change 1');
  } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
    isScroll = 0;
    $('.sidepanel_text').css('color', 'white');
    $('.sidepanel_divider ').css('background-color', 'white');
    $('.sidepanel_svg path ').css('fill', 'white');
    console.info('change 0');
  }
});

$(window).scroll(function(){
    if($(this).scrollTop() > 900) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots',
    fade: true,
    cssEase: 'linear',
});
let hamberger = document.querySelector('.hamburger');
let mobileNav = document.querySelector('.mobile-nav')
let close = document.querySelector('.cross');


hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});

close.addEventListener('click',function(){
    mobileNav.classList.remove('open')

});

});


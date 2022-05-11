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
let mobileNav = document.querySelector('.mobile-nav');
let close = document.querySelector('.cross');
let navlist = document.querySelector('.down');
let submitButton = document.querySelector("#Submit-Button");


function SendMail(){
    let params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_krz82gx","template_ys3k37n",params).then(function(res){
        alert("I'll Respond You Soon");
    })
}

submitButton.addEventListener('click',()=>{
    SendMail()
})




hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});

close.addEventListener('click',function(){
    mobileNav.classList.remove('open')

});
navlist.addEventListener('click',function(){
    mobileNav.classList.remove('open')
});


});


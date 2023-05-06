$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
        fade: true,
        cssEase: 'linear',
    });
    let hamberger = document.querySelector('.hamburger');
    let mobileNav = document.querySelector('.mobile-nav');
    let close = document.querySelector('.cross');
    let navlist = document.querySelector('.down');
    let submitButton = document.querySelector("#Submit-Button");
    let submitAlert = document.querySelector(".submit-alert");
    let submitSuccess = document.getElementById("ABC")
    let contactForm = document.getElementById("contacts-form");
    let loader = document.querySelector(".loader-wrapper")
    let senderName = document.querySelector(".sender-name")
    let message = document.querySelector(".message")




    function SendMail() {
        let params = {
            from_name: document.getElementById("fullName").value,
            email_id: document.getElementById("email_id").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        }

        if (params.from_name && params.email_id && params.message) {
            contactForm.style.display = "none"
            submitButton.style.display = "none"

            loader.classList.remove("hide")

            emailjs.send("service_krz82gx", "template_ys3k37n", params).then(function (res) {
                contactForm.style.display = "none"
                submitButton.style.display = "none"
                senderName.innerHTML = params.from_name
                message.innerHTML = "Your Responce has been recorded , You will be responded soon"
                loader.classList.add("hide")
                submitSuccess.classList.remove("active")
                contactForm.reset()


            })
        } else {
            submitAlert.classList.remove("active")
            submitAlert.innerHTML = "Please fill all required fields"
        }
        setTimeout(() => {
            submitAlert.classList.add("active")
        }, 1700);

    }




    submitButton.addEventListener('click', () => {
        SendMail();

    })




    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    close.addEventListener('click', function () {
        mobileNav.classList.remove('open')

    });
    navlist.addEventListener('click', function () {
        mobileNav.classList.remove('open')
    });


})

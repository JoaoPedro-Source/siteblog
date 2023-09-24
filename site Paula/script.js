$(document).ready(function () {
    // Código para a barra de navegação transparente
    $(window).scroll(function () {
        if (this.scrollY > 100) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });


    // Código para o carrossel Owl Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            const subject = `Contato de ${firstName} ${lastName}`;
            const body = `Nome: ${firstName} ${lastName}\nEmail: ${email}\nMensagem: ${message}`;

            // Substitua 'email_da_dona@example.com' pelo endereço de email da dona do site
            const recipientEmail = 'email_da_dona@example.com';

            const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;
        });
    });
});

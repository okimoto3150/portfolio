/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const elements = document.querySelectorAll('section.resume-section');

    function checkPosition() {
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fadeInUp');

                element.addEventListener('animationend', (event) => {
                    const typingElement = element.querySelector('.typing-animation');
                    if (typingElement) {
                        typingElement.style.opacity = 1;
                        typingElement.style.animation = `typing 1.5s steps(40, end), blink-caret .75s step-end infinite`;
                    }
                }, { once: true });
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); 

});

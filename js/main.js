$(window).on('load', function () {
    setTimeout(function () {
        $('body').addClass('page-loaded');
        new WOW().init();
    }, 2000);
});

$(document).ready(function () {

    // Hamburger

    function hamburgerClose() {
        $('.burger').removeClass('js-open');
        $('.overlay').fadeOut(100);
        $('html, body').removeClass('js-overflow');
        $('.navbar').removeClass('js-nav-active');
    }

    $('.burger').on('click', function (event) {
        $(this).toggleClass('js-open');
        $('html, body').toggleClass('js-overflow');
        $('.navbar').toggleClass('js-nav-active');

        $('.overlay').click(function (event) {
            hamburgerClose();
        });

        if ($(this).hasClass('js-open')) {
            $('.overlay').fadeIn(100).css('z-index', '10');

            document.onkeydown = function (e) {
                if (e.keyCode == 27) {
                    hamburgerClose();

                    return false;
                }
            };

        } else {
            hamburgerClose()
        }
    });

    // Header

    if ($(window).width() >= 1025) {
        window.addEventListener('scroll', () => {

            if ($(window).scrollTop() > 75) {
                $('.header').addClass('js-header-fixed');
            } else {
                $('.header').removeClass('js-header-fixed');
            }
        });
    }

    if ($(window).width() <= 1024) {
        $('.header').addClass('js-header-fixed');
        $('.hero').css('paddingTop', $('.header').height());
        $('.navbar').css('top', $('.header').height());
    }


    // form Search

    let searchBtn = document.querySelector('.search-link');
    let searchField = document.querySelector('.search-field-block');
    let searchFieldContent = document.querySelector('.search-field-block-content');
    let closeBtn = document.querySelector('.close-btn');
    let input = document.querySelector('.search-field-block input');

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        searchField.classList.add('active');
    });
    closeBtn.addEventListener('click', () => {
        searchField.classList.remove('active');
    });
    input.addEventListener('input', () => {
        searchFieldContent.classList.add('active');
        if ((input.value == null || input.value === "") && searchFieldContent.classList.contains('active')) {
            searchFieldContent.classList.remove('active');
        }
    });

    document.onkeydown = function (e) {
        if (e.keyCode == 27) {

            searchBtn.classList.remove('active');
            searchField.classList.remove('active');
            input.classList.remove('active');

            return false;
        }
    };

    // Wondow load

    window.addEventListener('orientationchange', function() {
        location.reload();
    }, false);


    // Sliders

    let feedbackSwiper = new Swiper('.feedback-swiper .swiper-container', {
        spaceBetween: 0,
        effect: 'coverflow',
        allowTouchMove: false,
        slidesPerView: 1.2,
        speed: 500,
        centeredSlides: true,
        navigation: {
            nextEl: '.feedback-swiper .swiper-button-next',
            prevEl: '.feedback-swiper .swiper-button-prev',
        },
        coverflowEffect: {
            rotate: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        },
        fadeEffect: {
            crossFade: false
        },
        breakpoints: {
            320: {
                coverflowEffect: {
                    stretch: 200,
                },
            },
            360: {
                coverflowEffect: {
                    stretch: 200,
                },
            },
            375: {
                coverflowEffect: {
                    stretch: 212,
                },
            },
            414: {
                coverflowEffect: {
                    stretch: 235,
                },
            },
            575: {
                coverflowEffect: {
                    stretch: 350,
                },
            },
            767: {
                coverflowEffect: {
                    stretch: 322,
                },
            },
            768: {
                coverflowEffect: {
                    stretch: 450,
                },
            },
            992: {
                coverflowEffect: {
                    stretch: 480,
                },
            },
            1280: {
                coverflowEffect: {
                    stretch: 605,
                },
            },
            1366: {
                coverflowEffect: {
                    stretch: 595,
                },
            },
            1441: {
                coverflowEffect: {
                    stretch: 750,
                },
            }
        }
    })

});
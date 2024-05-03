window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs__item"),
        playBtn = document.querySelector('#playVideo'),
        video = document.querySelector('#video');
    playBtn.addEventListener('click', function () {
        video.play();
        video.setAttribute('controls', 'controls');
        playBtn.style.display = "none";
    })
    video.addEventListener('ended', function () {
        this.src = this.src;
        playBtn.style.display = "block";
        video.removeAttribute('controls', 'controls');
    })
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            const isActive = elem.classList.contains("tabs__item__active");

            tabs.forEach(otherItem => {
                otherItem.classList.remove("tabs__item__active");
            });

            if (!isActive) {
                elem.classList.add("tabs__item__active");
            }
        });
    });

    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        prevArrow: '<div class="carousel__arrow carousel__prev"><i class="fa-solid fa-angle-left"></i></div>',
        nextArrow: '<div class="carousel__arrow carousel__next"><i class="fas fa-angle-right"></i></div>'
    });

    $('#buyNowBtn').on('click', popupOpen);
    $('#tryToBtn').on('click', popupOpen);
    $('#tryToBtn2').on('click', popupOpen);
    $('.popup__close').on('click', () => {
        $('.popup').removeClass('popup_active');
        $('body').css('overflow', 'visible');
    });

    function popupOpen() {
        $('.popup').addClass('popup_active');
        $('body').css('overflow', 'hidden');
    }

    $('#commentUs').on('click', popupOpen2);
    $('.popup__close_2').on('click', () => {
        $('.popup_2').removeClass('popup_active_2');
        $('body').css('overflow', 'visible');
    });

    function popupOpen2() {
        $('.popup_2').addClass('popup_active_2');
        $('body').css('overflow', 'hidden');
    }

    

    $("a[href*='#']").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 888);
        e.preventDefault();
        return false;
    });
});
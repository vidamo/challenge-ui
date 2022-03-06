$(function () {

    $('a').click(function (event) {
        let scrollOffset = 0;

        if ($(this).is('a[href^="#"]') && $(this).attr('href').length >= 2) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + scrollOffset
            }, 1000);
            return false;
        }
    });

    const swiper = new Swiper('.testimonials__slider  .swiper-container', {
        speed: 1000,
        spaceBetween: 100,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
      $('.main__arrow-bottom i').on('click',function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".passionate").offset().top
        }, 2000);
      });

      AOS.init();
     



});






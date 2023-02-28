(function ($): void {
  $('.slider-new').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    // prevArrow: $('.previous-btn'),
    // nextArrow: $('.next-btn'),
    // prevArrow: $('.previous'),
    // nextArrow: $('.next'),
    speed: 1000,
  });
})(jQuery);

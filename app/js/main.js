

  $(document).ready(function(){

    $('.slider__body').slick({
      /* setting-name: setting-value */
      /* $('.single-item').slick(); */
      dots: true,
      arrows: false,
      accessibility: false,
      slidesToShow: 1,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      //nextArrow:'<button type="button" class="slick-next"></button>',
      //prevArrow:'<button type="button" class="slick-prev"></button>', 
      responsive:[{
        breakpoint: 768,
        settings: {}
      }]
    });
  
    });
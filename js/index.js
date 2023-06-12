$(document).ready(function(){
    $('.discover-blog').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 6000,
        responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true
            }
          }
        ]
      });
    });
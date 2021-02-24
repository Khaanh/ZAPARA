// Slider Hero
$('#js-heroSlider').on('init reInit afterChange', function (event, slick) {
  $('#js-heroCounter').html(
    slick.slickCurrentSlide() + 1 + '/' + slick.slideCount
  )
});

$('#js-heroSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

// Slider Reviews
$('#js-reviewsSlider').slick ({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  // autoplay: true,
  arrows: true,
  appendArrows: $('#js-reviewsNav'),
  prevArrow: `<button type="button" class="slick-prev slick-arrow icon-arrow-left"></button>`,
  nextArrow: `<button type="button" class="slick-next slick-arrow icon-arrow-left"></button>`,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
// Slider Hero
function heroInit() {

  let $heroSlider = $('#js-heroSlider');

  $heroSlider.on('init', function (event, slick) {
    $(this).append('<div class="slick-counter"><span class="current"></span><div class="slider-progress"><div class="progress"></div></div><span class="total"></span> </div>');
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
  });

  $heroSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
  });


  $heroSlider.slick({
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1000,
    pauseOnHover: true,
  })

  let time = 3;
  let $bar, isPause, tick, percentTime;

  $bar = $('.slider-progress .progress');

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 15);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + '%'
      });

      if (percentTime >= 100) {
        $heroSlider.slick('slickNext');
      }
    }
  }

  function resetProgressbar() {
    $bar.css({
      width: 0 + '%'
    });

    clearTimeout(tick)
  }

  $heroSlider.on('afterChange', function (event, slick, currentSlide) {
    startProgressbar();
  })

  $heroSlider.on({
    mouseenter: function (e) {
      console.log(e);
      isPause = true;
    },
    mouseleave: function () {
      isPause = false;
    }
  })
  startProgressbar();
}heroInit();

// Slider Reviews
function reviewsInit() {
  $('#js-reviewsSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1500,
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
}reviewsInit();
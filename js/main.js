$('.banners').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-dots'
});
$('.slider-dots').slick({
  infinite: true,
  speed: 300,
 
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.banners',
  prevArrow: '<img class="slider-studio_left" src="img/BTN_arrow_back.svg" alt="">',
  nextArrow: '<img class="slider-studio_right" src="img/BTN_arrow_forward.svg" alt="">',
});


$(document).ready(function () {
  $("#resizable").resizable({ handles: 'e', minWidth: 950 });
  $("#resizable_2").resizable({ handles: 'e', minWidth: 300 });
  $("#resizable_3").resizable({ handles: 'e', minWidth: 300 });
  $("#resizable_4").resizable({ handles: 'e', minWidth: 950 });
  $("#resizable_5").resizable({ handles: 'e', minWidth: 300 });
});

$(window).on('load', function () {
  $('.preloader').delay(2000).fadeOut('slow');
});



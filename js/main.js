$(function () {
  
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
  autoplaySpeed: 9000,
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.banners',
  prevArrow: '<img class="slider-studio_left" src="img/Arrow_back.svg" alt="">',
  nextArrow: '<img class="slider-studio_right" src="img/Arrow_next.svg" alt="">',
  // responsive: [
  //   {
  //     breakpoint: 700,
  //     settings: {
     
  //       slidesToShow: 2
  //     }
  //   }

  // ]
});

$(document).ready(function () {
  $("#resizable").resizable({ handles: 'e', minWidth: 300 });
  $("#resizable_5").resizable({ handles: 'e', minWidth: 950 });
  $("#resizable_2").resizable({ handles: 'e', minWidth: 300 });
  $("#resizable_3").resizable({ handles: 'e', minWidth: 300 });
  $("#resizable_4").resizable({ handles: 'e', minWidth: 950 });
});



let interval = setTimeout(function () {
  if ($(".slick-track .slick-slide").hasClass("slick-active")) {

    $('#slide').html(' <iframe class="small" src="./small_banners/BBDO_MTS_Cashback_Mail_240x400/BBDO_MTS_Cashback_240x400.html"width="240px" height="400px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');

    $('#slide1').html(' <iframe src="./small_banners/LADA_Deal_240x400/LADA_Deal_240x400.html" width="240px" height="400px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');

    $('#slide1').html(' <iframe src="./small_banners/LADA_Deal_240x400/LADA_Deal_240x400.html" width="240px" height="400px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');

    $('#slide2').html('<iframe src="./small_banners/MTS_Conv4_Segmento_240x400/MTS_Convergent_240x400.html" width="240px"height="400px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');

    $('#slide3').html('<iframe src="./small_banners/MTS_Home_Segmento_240x400/MTS_Home_240x400.html" width="240px" height="400px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');

    $('#slide4').html('<iframe src="./small_banners/ter/MTS_Sputnik_240x400.html" width="240px" height="400px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');

    $('#slide5').html(' <iframe src="./small_banners/WASD_SL4_Zanuda_Mail_Pochta_240x400/WASD_SL4_Zanuda_240x400.html" width="240px"height="400px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');

    $('#slide6').html(' <iframe src="./small_banners/WASD_Stream_Basic_Yandex_RTB_240x400/WASD_Stream_Basic_240x400.html" width="240px"height="400px">Ваш браузер не поддерживает плавающие фреймы!</iframe>');
  }
}, 4000, clearTimeout);
});

// ADAPTIV BANNERS

$( "#ban" ).click(function(){
  $( "#ban" ).html('<iframe src="./big_banners/MTS_Invest_Sostav_100Px200/MTS_Invest_100Px200.html" width="100%" height="200px">Ваш браузер не поддерживает плавающие фреймы!</iframe>'); 
});

$( "#ban2" ).click(function(){ 
  $( "#ban2" ).html('<iframe src="./big_banners/MTS_VoLTE_Sostav_100Px200/MTS_VoLTE_100Px200.html" width="100%" height="200px">Ваш браузер не поддерживает плавающие фреймы!</iframe>'); 
});

$( "#ban3" ).click(function(){ 
  $( "#ban3" ).html('<iframe class="big" src="./small_banners/MTS_iPhone_Afisha_Mobile_100Px250/index.html" width="100%"height="250px">Ваш браузер не поддерживает плавающие фреймы!</iframe>'); 
});

$( "#ban4" ).click(function(){ 
  $( "#ban4" ).html('<iframe src="./big_banners/mtsspam/MTS_SPAM_940x250.html" width="100%" height="250px">Ваш браузер не поддерживает плавающие фреймы!</iframe>'); 
});

$( "#ban5" ).click(function(){ 
  $( "#ban5" ).html('<iframe src="./big_banners/MF_Bistrolet_RBC_100Px250/index.html" width="100%" height="250px">Ваш браузер не поддерживает плавающие фреймы!</iframe>'); 
});
  


$(window).on('load', function () {
  $('.preloader').delay(2000).fadeOut('slow');
});



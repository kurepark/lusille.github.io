$(document).ready(function(){
  $('.btn_link_main').on('click',function(){
    var $url = $(this).attr('data-url');

    $('.dimmed_layer').addClass('dimmed_on');
    $('.work_content').addClass('dimmed_on');
    setTimeout(function(){
      location.href = $url;
    }, 1000);

  });
  

});

//work slider

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

function main() {
  // 슬라이드 메뉴 설정
  window.addEventListener('resize', getWidth);
  $('.side_menu_btn').on('click', function() {
    $('.menu_wrap').animate({
      'margin-right': 0
    }, 300);
  });
  $('.side_menu_close_btn').on('click', function() {
    $('.menu_wrap').animate({
      'margin-right': '-270px'
    }, 300);
  });

  // social 영역 자동 슬라이드
  socialSlide();
}

function getWidth() {
  var w = window.innerWidth;

  if (w > 820 && $('.menu_wrap').css('margin-right') == '-270px') {
    $('.menu_wrap').css('margin-right', 0);
  } else if (w <= 820 && $('.menu_wrap').css('margin-right') == '0px') {
    $('.menu_wrap').css('margin-right', '-270px');
  }
}

function socialSlide() {
  var swiper = new Swiper('.social_preview', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

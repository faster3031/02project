//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
    var swiper = new Swiper("#fandombox", {
        spaceBetween: 30,
      effect: 'fade',
      autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 5000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
      },

        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {

});
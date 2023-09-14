//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
    var swiper = new Swiper('#fandombox', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        
        // autoHeight: true,
        pagination: {
          el: '.rank',
          clickable: true,
        }
      });
});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {

});
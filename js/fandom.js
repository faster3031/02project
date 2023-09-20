//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
  // var swiper = new Swiper("#fandombox", {
  //   spaceBetween: 30,
  //   effect: "fade",
  //   autoplay: {     //자동슬라이드 (false-비활성화)
  //     delay: 3000, // 시간 설정
  //     disableOnInteraction: false, // false-스와이프 후 자동 재생
  //   },

  //   loop: true,
  //   pagination: {
  //     el: ".fandom .swiper-pagination",
  //     clickable: true,
  //   },
  // });
});
var memberCountConTxt_01= 21212;
var memberCountConTxt_02= 678;
  
  $({ val : 0 }).animate({ val : memberCountConTxt_01 }, {
   duration: 2000,
  step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountConTxt_01").text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountConTxt_01").text(num);
  }
  });


  $({ val : 0 }).animate({ val : memberCountConTxt_02 }, {
   duration: 2000,
  step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountConTxt_02").text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountConTxt_02").text(num);
  }
});

//3자리마다 , 찍기
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {});

//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {

});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  
    var divs = document.querySelectorAll(".card-list div");
divs.forEach(function (elm) {
  elm.addEventListener("mouseenter", function () {
    var panel = document.querySelector(".highlight");
    panel.classList.toggle("highlight");
    elm.classList.toggle("highlight");
  });
});
window.focus();
// 버튼과 섹션 요소를 가져오기
const toggleButton = document.getElementById('toggleBtn');
const section = document.getElementById('artist-hidden');

// 버튼 클릭 이벤트 핸들러 추가
toggleButton.addEventListener('click', function () {
    // 섹션의 현재 표시 상태를 확인하고 토글하기
    if (section.style.display === 'none' || section.style.display === '') {
        // 섹션이 숨겨져 있으면 나타내기
        section.style.display = 'block';
    } else {
        // 섹션이 보이고 있으면 감추기
        section.style.display = 'none';
    }
});
$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true,
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
});

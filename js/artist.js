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
$(".custom-carousel").owlCarousel({
    autoWidth: true,
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
        // 검색 이벤트 핸들러
        $("#searchBtn").click(function () {
            var searchTerm = $("#searchInput").val().toLowerCase(); // 검색어를 소문자로 변환
    
            // 모든 슬라이드에서 "active" 클래스 제거
            $(".custom-carousel .item").removeClass("active");
    
            // 슬라이드를 검색어와 비교하여 일치하는 경우 "active" 클래스 추가
            $(".custom-carousel .item").each(function () {
                var slideTitle = $(this).find(".item-desc h3").text().toLowerCase(); // 제목 텍스트 추출
                var slideContent = $(this).find(".item-desc p").text().toLowerCase(); // 내용 텍스트 추출
                
                // 제목 또는 내용 중에서 검색어와 일치하는 경우 "active" 클래스 추가
                if (slideTitle.includes(searchTerm) || slideContent.includes(searchTerm)) {
                    $(this).addClass("active");
                }
            });
        });
        var owl = $(".custom-carousel").owlCarousel({
          autoWidth: true
      });
  
      // 검색 이벤트 핸들러
      $("#searchBtn").click(function () {
          var searchTerm = $("#searchInput").val().toLowerCase(); // 검색어를 소문자로 변환
  
          // 모든 슬라이드에서 "active" 클래스 제거
          $(".custom-carousel .item").removeClass("active");
  
          // 슬라이드를 검색어와 비교하여 일치하는 경우 "active" 클래스 추가
          $(".custom-carousel .item").each(function () {
              var slideTitle = $(this).find(".item-desc h3").text().toLowerCase(); // 제목 텍스트 추출
              var slideContent = $(this).find(".item-desc p").text().toLowerCase(); // 내용 텍스트 추출
              
              // 제목 또는 내용 중에서 검색어와 일치하는 경우 "active" 클래스 추가
              if (slideTitle.includes(searchTerm) || slideContent.includes(searchTerm)) {
                  $(this).addClass("active");
              }
          });
  
          // "active" 클래스가 추가된 슬라이드의 인덱스 찾기
          var activeSlideIndex = $(".custom-carousel .item.active").index();
  
          // 중앙 슬라이드로 이동
          owl.trigger('to.owl.carousel', [activeSlideIndex, 0, true]);
          
      });
  });
});

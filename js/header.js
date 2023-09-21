//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  //헤더 스크롤 기능
  //스크롤바의 상단위치
  let scy = 0;
  let scActive = 50;
  scy = window.document.documentElement.scrollTop;
  let header = document.querySelector(".header");
  header.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });
  header.addEventListener("mouseleave", function () {
    if (scy < scActive) {
      header.classList.remove("header-active");
    }
  });
  //새로고침 시 적용
  if (scy > scActive) {
    header.classList.add("header-active");
  }
  window.addEventListener("scroll", function () {
    scy = window.document.documentElement.scrollTop;
    // console.log(scy);
    if (scy > scActive) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });

  window.addEventListener("scroll", function () {
    scy = window.document.documentElement.scrollTop;
    // console.log(scy);
    if (scy > scActive) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });


  // -------------------------------------------------------로그인
  // 페이지가 로드될 때 초기 대시보드 화면을 표시
 
  // 로그인 버튼 클릭시 호출되는 함수
  document
    .getElementById("login-button")
    .addEventListener("click", function () {
      // 로그인 페이지로 이동
      window.location.href = "login.html";
    });
  // document
  //   .getElementById("singup-botton")
  //   .addEventListener("click", function () {
  //     // 회원가입 페이지로 이동
  //     window.location.href = "signup.html";
  //   });
  document
    .getElementById("logout-button")
    .addEventListener("click", function () {
      // 로그아웃 로직을 처리하고 다시 초기 화면을 표시합니다
      document.getElementById("login-section").style.display = "block";
      document.getElementById("dashboard-section").style.display = "none";
    });
    showInitialDashboard()
  // 대시보드 화면 표시 함수
  function showInitialDashboard() {
    //현재페이지의 URL에서 쿼리 문자열을 가져와 URLSearchParams()객체를 생성합니다.
    var params = new URLSearchParams(window.location.search);
    var username = params.get("username");
    if (username) {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("dashboard-section").style.display = "flex";
      document.getElementById(
        "username-display"
      ).textContent = `${username}님`;
      // 로그아웃 버튼
      document.getElementById("logout-button").style.display = "block";
    } else {
      document.getElementById("login-section").style.display = "block";
      document.getElementById("dashboard-section").style.display = "none";
      document.getElementById("logout-button").style.display = "none";
    }
  }
});

// 모든 메뉴 항목을 가져와서 클릭 이벤트를 추가합니다.
const menuItems = document.querySelectorAll('.nav ul li');

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // 클릭된 항목에 포커스를 줍니다.
    item.focus();
  });
});

// 페이지가 로드될 때 초기 포커스 설정
window.addEventListener('load', function() {
  // 현재 페이지 URL을 가져옵니다.
  const currentPageUrl = window.location.href;

  // 초기 포커스를 설정할 메뉴 항목을 선택합니다.
  let initialFocusItem = null;

  if (currentPageUrl.includes('infopage.html')) {
    initialFocusItem = document.querySelector('.nav ul li:nth-child(1)');
  } else if (currentPageUrl.includes('review.html')) {
    initialFocusItem = document.querySelector('.nav ul li:nth-child(5)');
  }

  if (initialFocusItem) {
    initialFocusItem.focus();
  }
});
// 페이지가 이동한 후에도 포커스 설정
window.addEventListener('DOMContentLoaded', function() {
  // 현재 활성화된 메뉴 항목을 확인합니다.
  const activeMenuItem = document.querySelector('.nav ul li:focus');

  if (!activeMenuItem) {
    // 포커스된 메뉴 항목이 없다면 초기 포커스를 설정합니다.
    const currentPageUrl = window.location.href;

    let initialFocusItem = null;

    if (currentPageUrl.includes('infopage.html')) {
      initialFocusItem = document.querySelector('.nav ul li:nth-child(1)');
    } else if (currentPageUrl.includes('review.html')) {
      initialFocusItem = document.querySelector('.nav ul li:nth-child(5)');
    }

    if (initialFocusItem) {
      initialFocusItem.focus();
    }
  }
});
  // top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 99999,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = this.document.documentElement.scrollTop;
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });


//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  // 모달창 열기
  const openPaymentModalBtn = document.getElementById("openPaymentModalBtn");
  const paymentModal = document.getElementById("paymentModal");
  const closePaymentModalBtn = document.getElementById("closePaymentModalBtn");

  openPaymentModalBtn.addEventListener("click", () => {
    paymentModal.style.display = "block";
  });

  // 모달창 닫기
  closePaymentModalBtn.addEventListener("click", () => {
    paymentModal.style.display = "none";
  });

  // 모달창 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target == paymentModal) {
      paymentModal.style.display = "none";
    }
  });

  // 금액 선택 버튼 클릭 시 처리
  const amountButtons = document.querySelectorAll(".amount-button");
  const customAmountInput = document.getElementById("custom-amount");
  const selectedAmountDisplay = document.getElementById(
    "selected-amount-display"
  );
  const confirmAmountBtn = document.getElementById("confirmAmountBtn");

  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = button.getAttribute("data-amount");
      selectedAmountDisplay.textContent = amount + "원";
      customAmountInput.value = "";
      confirmAmountBtn.style.display = "block";
    });
  });

  let selectedAmount = 0; // 초기 선택 금액은 0원

  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = parseInt(button.getAttribute("data-amount")); // 금액을 정수로 변환
      selectedAmount += amount; // 선택한 금액을 누적
      selectedAmountDisplay.textContent = selectedAmount + "원"; // 선택한 금액 표시
      confirmAmountBtn.style.display = "block";
    });
  });

  // 직접 금액 입력 필드 이벤트 처리
  customAmountInput.addEventListener("input", () => {
    selectedAmountDisplay.textContent = customAmountInput.value + "원";
    confirmAmountBtn.style.display = "block";
  });

  // 모달창 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target == paymentModal) {
      paymentModal.style.display = "none";

      // 모달이 닫힐 때 선택한 금액 초기화
      selectedAmount = 0;
      selectedAmountDisplay.textContent = "0원"; // 초기화된 금액을 화면에 표시
    }
  });

  // ... (이전 코드) ...

  // 확인 버튼 클릭 시 처리
  confirmAmountBtn.addEventListener("click", () => {
    confirmAmountBtn.style.display = "block";

    // 결제 확인 모달을 띄우는 부분 추가
    confirmPaymentModal.style.display = "block";
  });

  // 결제 확인 모달 창 닫기
  closeConfirmPaymentModalBtn.addEventListener("click", () => {
    confirmPaymentModal.style.display = "none";
  });

  // "예" 버튼 클릭 시 처리
  confirmPaymentBtn.addEventListener("click", () => {
    // 여기에서 실제 결제 로직을 추가하세요.

    // 결제 처리가 성공하면 모달을 닫을 수 있습니다.
    confirmPaymentModal.style.display = "none";

    // 결제 완료 메시지를 표시하거나 리다이렉션 등을 수행할 수 있습니다.
  });

  // "아니오" 버튼 클릭 시 처리
  cancelPaymentBtn.addEventListener("click", () => {
    confirmPaymentModal.style.display = "none";
  });

  // "예" 버튼 클릭 시 처리
  confirmPaymentBtn.addEventListener("click", () => {
    // 여기에서 실제 결제 로직을 추가하세요.

    // 결제 처리가 성공하면 결제 완료 모달을 띄우고 모든 모달을 닫습니다.
    confirmPaymentModal.style.display = "none";
    paymentCompleteModal.style.display = "block";

    // 결제 완료 모달이 닫힐 때 선택한 금액 초기화
    selectedAmount = 0;
    selectedAmountDisplay.textContent = "0원"; // 초기화된 금액을 화면에 표시
    // 결제 완료 모달 닫기 버튼 클릭 시 처리
    closePaymentCompleteModalBtn.addEventListener("click", () => {
      paymentCompleteModal.style.display = "none";
      paymentModal.style.display = "none";
    });
  });
  const checkbox = document.getElementById('anonymous-payment');
  const customCheckbox = document.querySelector('.custom-checkbox');

  // span을 클릭할 때도 체크박스를 토글합니다.
  customCheckbox.addEventListener('click', function () {
      checkbox.checked = !checkbox.checked;
      updateCheckboxStyle();
  });

  checkbox.addEventListener('change', function () {
      updateCheckboxStyle();
  });

  function updateCheckboxStyle() {
      if (checkbox.checked) {
          customCheckbox.classList.add('checked');
      } else {
          customCheckbox.classList.remove('checked');
      }
  }

  
    // 모달 닫기 버튼 클릭 이벤트를 처리합니다.
    paymentCompleteModal.addEventListener('click', () => {
        // 모달 닫힐 때 체크박스를 초기화합니다.
        checkbox.checked = false;

        // 모달을 숨깁니다.
        paymentModal.style.display = 'none';
    });
    window.addEventListener("click", (event) => {
        if (event.target == paymentModal) {
            checkbox.checked = false;
        }
      });

      document.addEventListener("DOMContentLoaded", function() {
        const commentForm = document.getElementById("comment-form");
        const commentList = document.getElementById("comment-list");
  
        // 댓글 작성 폼 제출 이벤트 핸들러
        commentForm.addEventListener("submit", function(event) {
          event.preventDefault(); // 기본 동작 방지
  
          // 사용자가 입력한 댓글 내용 가져오기
          const commentText = document.getElementById("name").value;
  
          // 댓글 목록에 새 댓글 추가
          if (commentText) {
            const newComment = document.createElement("li");
            newComment.className = "comment";
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
  
            // 댓글 입력 필드 초기화
            document.getElementById("name").value = "";
          }
        });
      });
});

//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
// 모달창 열기
const openPaymentModalBtn = document.getElementById('openPaymentModalBtn');
const paymentModal = document.getElementById('paymentModal');
const closePaymentModalBtn = document.getElementById('closePaymentModalBtn');

openPaymentModalBtn.addEventListener('click', () => {
    paymentModal.style.display = 'block';
});

// 모달창 닫기
closePaymentModalBtn.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// 모달창 외부 클릭 시 닫기
window.addEventListener('click', (event) => {
    if (event.target == paymentModal) {
        paymentModal.style.display = 'none';
    }
});

// 금액 선택 버튼 클릭 시 처리
const amountButtons = document.querySelectorAll('.amount-button');
const customAmountInput = document.getElementById('custom-amount');
const selectedAmountDisplay = document.getElementById('selected-amount-display');
const confirmAmountBtn = document.getElementById('confirmAmountBtn');
const submitPaymentBtn = document.getElementById('submitPaymentBtn');

amountButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const amount = button.getAttribute('data-amount');
        selectedAmountDisplay.textContent = amount + '원';
        customAmountInput.value = '';
        confirmAmountBtn.style.display = 'block';
    });
});

let selectedAmount = 0; // 초기 선택 금액은 0원

amountButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const amount = parseInt(button.getAttribute('data-amount')); // 금액을 정수로 변환
        selectedAmount += amount; // 선택한 금액을 누적
        selectedAmountDisplay.textContent = selectedAmount + '원'; // 선택한 금액 표시
        confirmAmountBtn.style.display = 'block';
    });
});

// 직접 금액 입력 필드 이벤트 처리
customAmountInput.addEventListener('input', () => {
    selectedAmountDisplay.textContent = customAmountInput.value + '원';
    confirmAmountBtn.style.display = 'block';
});

// 확인 버튼 클릭 시 처리
confirmAmountBtn.addEventListener('click', () => {
    confirmAmountBtn.style.display = 'none';
    submitPaymentBtn.style.display = 'block';

    // 모달 창을 닫는 부분 추가
    paymentModal.style.display = 'none';
});

// 결제 버튼 클릭 시 처리
submitPaymentBtn.addEventListener('click', () => {
    // 여기에 실제 결제 로직을 추가하세요.
    
    // 결제 처리가 성공하면 모달을 닫을 수 있습니다.
    paymentModal.style.display = 'none';

    // 결제 완료 메시지를 표시하거나 리다이렉션 등을 수행할 수 있습니다.
});
});



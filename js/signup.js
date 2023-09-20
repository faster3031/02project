//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {});

// Wait for multimedia resources to load
// Wait for multimedia resources to load
window.addEventListener("load", function () {
  const signupForm = document.getElementById("signup-form");
  const checkboxes = document.querySelectorAll('input[name="terms"]');
  const selectAllCheckbox = document.getElementById("chk");

  // Event listener for the form submission
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get user input values
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    // Create a new user object
    const newUser = {
      username: username,
      password: password,
    };

    // Retrieve and parse the existing users from local storage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    users.push(newUser);

    // Store the updated user array back in local storage
    localStorage.setItem("users", JSON.stringify(users));

    alert("가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
    window.location.href = "login.html"; // Redirect to the login page
  });

  // Event listener for the "전체 약관 동의하기" checkbox
  selectAllCheckbox.addEventListener("change", function () {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  // Event listener for individual checkboxes to update the "전체 약관 동의하기" checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      checkSelectAll();
    });
  });

  function checkSelectAll() {
    const checkedCheckboxes = document.querySelectorAll(
      'input[name="terms"]:checked'
    );
    selectAllCheckbox.checked = checkboxes.length === checkedCheckboxes.length;
  }

  
});

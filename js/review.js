// 멀티미디어 리소스 로딩 완료 후 실행
//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
  $("#writeBtn").click(function () {
    $(".writecontainerbox").show();
  });
  $("#postClosseBtn").click(function () {
    $(".writecontainerbox").hide();
  });
});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  const postTitleInput = document.getElementById("postTitle");
  const postWriterInput = document.getElementById("postWriter");
  const postContentInput = document.getElementById("postContent");
  const addPostBtn = document.getElementById("addPostBtn");
  const postTableBody = document.getElementById("postTableBody"); // 변경된 부분
  const postDateInput = document.getElementById("postDate");
  const searchInput = document.getElementById("searchInput");
  const btnSearch = document.getElementById("btnSearch");
  const clearBtn = document.getElementById("clearBtn");

  let posts = [];
  // 등록 번호를 나타내는 변수
  let registrationNumber = 0;

  function addPostToDOM(post) {
    const postTableBody = document.getElementById("postTableBody");

    // 등록 번호를 업데이트하고 3자리로 표시
    registrationNumber++;
    const formattedRegistrationNumber = String(registrationNumber).padStart(
      3,
      "0"
    );

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
       <td class="num">${formattedRegistrationNumber}</td>
       <td class="subject"><a href="#">${post.title}</a></td>
       <td class="writer">${post.writer}</td>
       <td class="date">${post.date || ""}</td>
       <td class="hit">000</td>
       `;

    postTableBody.prepend(newRow);
  }

  addPostBtn.addEventListener("click", function () {
    const title = postTitleInput.value;
    const writer = postWriterInput.value;
    const content = postContentInput.value;
    const date = postDateInput.value;

    if (title && content) {
      const newPost = {
        title,
        writer,
        content,
        date: date || null,
      };

      posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));
      addPostToDOM(newPost);

      postTitleInput.value = "";
      postWriterInput.value = "";
      postContentInput.value = "";
      postDateInput.value = "";
    }
  });

  btnSearch.addEventListener("click", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPosts = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm)
      );
    });

    postTableBody.innerHTML = "";
    for (const post of filteredPosts) {
      addPostToDOM(post);
    }
  });

  if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
    for (const post of posts) {
      addPostToDOM(post);
    }
  }
});

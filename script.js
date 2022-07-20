// 
let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("message");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
})

let formValidation = () => {
    if (input.value === "") {
        message.innerHTML = "Post cannot be blank";
    } else {
        acceptData();
    }
};

let data = {};
let acceptData = () => {
    data["text"] = input.value;
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
};


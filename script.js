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
      <textarea disabled>${data.text}</textarea>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};
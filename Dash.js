const userPost = document.getElementById('userPost');
const userInput = document.getElementById('userInput');
const userPostBtn = document.getElementById('userPostBtn');

function userPostHandler(event) {
  // debugger;
  event.preventDefault();
  event.stopPropagation();
  const userPost = userInput.value;
  if (userPost) {
    const container4posts = document.querySelector('#container4posts');
    const newPost = document.createElement('div');
    newPost.innerText = userPost;
    container4posts.prepend(newPost);
  }
}
userPostBtn.addEventListener('click', userPostHandler);

// function deletePost(post) {let postList = document.querySelector('.post-list');postList.removeChild(post.parentNode);}function editPost(post) {// get new post text    var newPostText = prompt("Enter new post text:");    // update post text    post.innerHTML = newPostText;  }

// const btnForUserPost = document.createElement('div');
// btnForUserPost.classList.add('actionBtn');
// btnForUserPost.innerHTML ='
// <button onclick = "deleteUserPost(this)" type="submit" class="deleteBtn">Delete</button>
// '
// <button onclick = "editUserPost(this)" type="button" class="editBtn">Edit</button>;

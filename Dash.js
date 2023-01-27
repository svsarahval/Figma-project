const userPost = document.getElementById('userPost');
const userInput = document.getElementById('userInput');
const userPostBtn = document.getElementById('userPostBtn');

function userPostHandler(event) {
  debugger;
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

const userPost = document.getElementById('userPost');
const userInput = document.getElementById('userInput');
const userPostBtn = document.getElementById('userPostBtn');
const container4posts = document.querySelector('#container4posts');

function userPostHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  const userPost = userInput.value;
  if (userPost) {
    const newPost = document.createElement('div');
    newPost.innerHTML = `
      <p>${userPost}</p>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    container4posts.prepend(newPost);

    const editBtn = newPost.querySelector('.edit-btn');
    editBtn.addEventListener('click', function () {
      const postText = newPost.querySelector('p');
      const textArea = document.createElement('textarea');
      textArea.value = postText.innerText;
      newPost.replaceChild(textArea, postText);
      editBtn.innerText = 'Save';
      editBtn.removeEventListener('click', arguments.callee);
      editBtn.addEventListener('click', function () {
        postText.innerText = textArea.value;
        newPost.replaceChild(postText, textArea);
        editBtn.innerText = 'Edit';
        editBtn.removeEventListener('click', arguments.callee);
        editBtn.addEventListener('click', function () {
          const textArea = document.createElement('textarea');
          textArea.value = postText.innerText;
          newPost.replaceChild(textArea, postText);
          editBtn.innerText = 'Save';
          editBtn.removeEventListener('click', arguments.callee);
          editBtn.addEventListener('click', function () {
            postText.innerText = textArea.value;
            newPost.replaceChild(postText, textArea);
            editBtn.innerText = 'Edit';
            editBtn.removeEventListener('click', arguments.callee);
            editBtn.addEventListener('click', arguments.callee);
          });
        });
      });
    });
    const deleteBtn = newPost.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
      newPost.remove();
    });
  }
}
userPostBtn.addEventListener('click', userPostHandler);

// function userPostHandler(event) {
//   event.preventDefault();
//   event.stopPropagation();
//   const userPost = userInput.value;
//   if (userPost) {
//     const newPost = document.createElement('div');
//     newPost.innerText = userPost;

//     // Adding edit button
//     const editBtn = document.createElement('button');
//     editBtn.innerText = 'Edit';
//     editBtn.addEventListener('click', function () {
//       userInput.value = userPost;
//       container4posts.removeChild(newPost);
//     });
//     newPost.appendChild(editBtn);

//     // Adding delete button
//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.addEventListener('click', function () {
//       container4posts.removeChild(newPost);
//     });
//     newPost.appendChild(deleteBtn);

//     container4posts.prepend(newPost);
//   }
// }
// userPostBtn.addEventListener('click', userPostHandler);

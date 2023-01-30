const userPost = document.getElementById('userPost');
const userInput = document.getElementById('userInput');
const userPostBtn = document.getElementById('userPostBtn');
const container4posts = document.querySelector('#container4posts');

// creating post in the firebase database, with functions to save,edit,delete

const currentUser = 'user1'; //replace with the current user's identifier or username

// creating post in the firebase database, with functions to save,edit,delete

function getPosts() {
  fetch('https://login-page-sociable-default-rtdb.firebaseio.com/posts.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      Object.keys(data).forEach((postId) => {
        const postData = data[postId];
        const newPost = document.createElement('div');
        newPost.innerHTML = ` <p>${postData.content}</p>
          <button class="edit-btn" data-id="${postId}">Edit</button>
          <button class="delete-btn" data-id="${postId}">Delete</button>
          
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
            const postId = this.getAttribute('data-id');
            const updatedPost = {
              content: textArea.value,
            };
            fetch(
              `https://login-page-sociable-default-rtdb.firebaseio.com/posts/${postId}.json`,
              {
                method: 'PATCH',
                body: JSON.stringify(updatedPost),
              }
            )
              .then(() => {
                postText.innerText = textArea.value;
                newPost.replaceChild(postText, textArea);
                editBtn.innerText = 'Edit';
                editBtn.removeEventListener('click', arguments.callee);
                editBtn.addEventListener('click', arguments.callee);
              })
              .catch((error) => {
                console.error(error);
              });
          });
        });

        const deleteBtn = newPost.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
          const postId = this.getAttribute('data-id');
          fetch(
            `https://login-page-sociable-default-rtdb.firebaseio.com/posts/${postId}.json`,
            {
              method: 'DELETE',
            }
          )
            .then(() => {
              newPost.remove();
            })
            .catch((error) => {
              console.error(error);
            });
        });
      });
    });
}

function userPostHandler(event) {
  event.preventDefault();
  const userPost = userInput.value;
  userInput.value = '';
  fetch('https://login-page-sociable-default-rtdb.firebaseio.com/posts.json', {
    method: 'POST',
    body: JSON.stringify({ content: userPost }),
  })
    .then((response) => response.json())
    .then(() => {
      getPosts();
    })
    .catch((error) => {
      console.error(error);
    });
}

userPostBtn.addEventListener('click', userPostHandler);
getPosts();

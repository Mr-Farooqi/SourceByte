let likes = 100;

// html lick button function
function toggleLikes() {
    const likeButton = document.querySelector('.like-buttons');
    const likeCount = document.getElementById('like-counts');

    if (likeButton.classList.contains('liked')) {
        likes--;
        likeButton.textContent = '🤍';
        likeButton.classList.remove('liked');
    } else {
        likes++;
        likeButton.textContent = '❤️';
        likeButton.classList.add('liked');
    }

    likeCount.textContent = likes === 1 ? `${likes} Like` : `${likes} Likes`;
}

// css lick button function

function toggleLike() {
    const likeButton = document.querySelector('.like-button');
    const likeCount = document.getElementById('like-count');

    if (likeButton.classList.contains('liked')) {
        likes--;
        likeButton.textContent = '🤍';
        likeButton.classList.remove('liked');
    } else {
        likes++;
        likeButton.textContent = '❤️';
        likeButton.classList.add('liked');
    }

    likeCount.textContent = likes === 1 ? `${likes} Like` : `${likes} Likes`;
}
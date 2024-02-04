// Function to handle creating a new post
async function createPost(title, content) {
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to create post');
    }
}

// Function to handle updating a post
async function updatePost(postId, title, content) {
    // Similar to createPost, but with method 'PUT' and including postId in the URL
}

// Function to handle deleting a post
async function deletePost(postId) {
    // Similar to createPost, but with method 'DELETE' and including postId in the URL
}

// Event listeners for form submissions and button clicks for create, update, delete
document.querySelector('.new-post-form').addEventListener('submit', (event) => {
    event.preventDefault();
    // Get title and content from form
    // Call createPost()
});

document.querySelectorAll('.delete-post').forEach(button => {
    button.addEventListener('click', (event) => {
        const postId = event.target.dataset.postId;
        deletePost(postId);
    });
});

// Add event listeners for edit buttons and form submissions for updates

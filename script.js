// script.js

document.addEventListener("DOMContentLoaded", function () {
    loadBlogPosts();

    // Handle "Write a Blog" button visibility
    const writeBlogBtn = document.getElementById("writeBlogBtn");
    if (isAdmin()) {
        writeBlogBtn.classList.remove("hidden");
        writeBlogBtn.addEventListener("click", function () {
            window.location.href = "write-blog.html";
        });
    }
});

// Function to check if the user is an admin (Temporary basic check)
function isAdmin() {
    // You can replace this with an actual login system later
    return true; // Change to false if you want to hide the button
}

// Load Blog Posts from Local Storage
function loadBlogPosts() {
    const blogContainer = document.getElementById("blogPosts");
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    if (blogs.length === 0) {
        blogContainer.innerHTML = "<p>No blog posts yet. Be the first to write one!</p>";
        return;
    }

    blogContainer.innerHTML = ""; // Clear previous content

    blogs.forEach(blog => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        blogCard.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <span class="blog-date">${blog.date}</span>
            <a href="blog-post.html?id=${blog.id}" class="read-more">Read More</a>
        `;

        blogContainer.appendChild(blogCard);
    });
}

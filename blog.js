document.addEventListener("DOMContentLoaded", function () {
    const blogPostsContainer = document.getElementById("blogPosts");
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    if (blogs.length === 0) {
        blogPostsContainer.innerHTML = "<p>No blog posts yet. <a href='write-blog.html'>Write your first blog!</a></p>";
    } else {
        blogs.forEach(blog => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");

            blogCard.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.description.substring(0, 100)}...</p>
                <span class="blog-date">${blog.date}</span>
                <a href="blog-details.html?id=${blog.id}" class="read-more">Read More</a>
            `;

            blogPostsContainer.appendChild(blogCard);
        });
    }
});

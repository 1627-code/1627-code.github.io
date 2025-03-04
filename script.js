document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-posts");

    fetch("posts.json")
        .then(res => res.json())
        .then(posts => {
            blogContainer.innerHTML = posts.map(post => `
                <div class="post-card">
                    <h3>${post.title}</h3>
                    <p>${post.summary}</p>
                    <span class="post-date">${post.date}</span>
                    <a href="${post.link}" class="read-more">Read More</a>
                </div>
            `).join('');
        })
        .catch(error => console.error("Error loading posts:", error));
});

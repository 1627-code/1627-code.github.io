document.addEventListener("DOMContentLoaded", () => {
    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            const blogContainer = document.getElementById("blog-posts");

            posts.forEach(post => {
                const blogCard = document.createElement("div");
                blogCard.classList.add("blog-card");

                blogCard.innerHTML = `
                    <h3>${post.title}</h3>
                    <p class="blog-date">${post.date}</p>
                    <p>${post.summary}</p>
                    <a href="${post.link}" class="read-more">Read More</a>
                `;

                blogContainer.appendChild(blogCard);
            });
        })
        .catch(error => console.error("Error loading posts:", error));
});


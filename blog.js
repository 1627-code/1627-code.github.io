// Search Functionality
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const blogPosts = document.querySelectorAll(".blog-card");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        
        blogPosts.forEach(post => {
            const title = post.querySelector("h3").textContent.toLowerCase();
            const description = post.querySelector("p").textContent.toLowerCase();
            
            if (title.includes(searchText) || description.includes(searchText)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        });
    });
});

// Hero Section Animation
window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero");
    const scrolled = window.scrollY;
    hero.style.opacity = 1 - scrolled / 400;
});

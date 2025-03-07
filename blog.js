document.addEventListener("DOMContentLoaded", () => {
    const blogGrid = document.getElementById("blogGrid");
    const searchBar = document.getElementById("searchBar");

    // Sample blog data
    const blogs = [
        { title: "Cybersecurity Basics", description: "Understanding the fundamentals of cybersecurity." },
        { title: "Penetration Testing 101", description: "A beginner's guide to ethical hacking." },
        { title: "Dark Web Myths", description: "Exploring misconceptions about the dark web." },
        { title: "AI in Cybersecurity", description: "How artificial intelligence is revolutionizing security." }
    ];

    // Function to display blogs
    function displayBlogs(filteredBlogs) {
        blogGrid.innerHTML = "";
        filteredBlogs.forEach(blog => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");
            blogCard.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <a href="#" class="read-more">Read More</a>
            `;
            blogGrid.appendChild(blogCard);
        });
    }

    // Filter blogs based on search input
    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredBlogs = blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm) ||
            blog.description.toLowerCase().includes(searchTerm)
        );
        displayBlogs(filteredBlogs);
    });

    // Initial display
    displayBlogs(blogs);
});


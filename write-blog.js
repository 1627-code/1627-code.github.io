document.addEventListener("DOMContentLoaded", function () {
    const blogForm = document.getElementById("blogForm");
    const previewBtn = document.getElementById("previewBtn");
    const previewTitle = document.getElementById("previewTitle");
    const previewDescription = document.getElementById("previewDescription");
    const blogPreview = document.getElementById("blogPreview");

    previewBtn.addEventListener("click", function () {
        const title = document.getElementById("blogTitle").value;
        const description = document.getElementById("blogDescription").value;

        if (!title || !description) {
            alert("Please fill in both the title and description.");
            return;
        }

        previewTitle.textContent = title;
        previewDescription.textContent = description;
        blogPreview.classList.remove("hidden");
    });

    blogForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("blogTitle").value;
        const description = document.getElementById("blogDescription").value;
        const date = new Date().toISOString().split("T")[0];

        const newBlog = {
            id: Date.now(),
            title,
            description,
            date
        };

        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        blogs.unshift(newBlog);
        localStorage.setItem("blogs", JSON.stringify(blogs));

        alert("Blog Published Successfully!");
        window.location.href = "blog.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.getElementById("profile-icon");
    const profileMenu = document.getElementById("profile-menu");
    const writeBlogBtn = document.getElementById("write-blog-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Simulating authentication state
    let isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    function updateUI() {
        if (isAuthenticated) {
            profileMenu.classList.remove("hidden");
            writeBlogBtn.style.display = "block";
            logoutBtn.style.display = "block";
        } else {
            profileMenu.classList.add("hidden");
            writeBlogBtn.style.display = "none";
            logoutBtn.style.display = "none";
        }
    }

    profileIcon.addEventListener("click", function () {
        profileMenu.classList.toggle("hidden");
    });

    logoutBtn.addEventListener("click", function () {
        isAuthenticated = false;
        localStorage.setItem("isAuthenticated", "false");
        updateUI();
    });

    // Simulate login for demo purposes
    profileIcon.addEventListener("dblclick", function () {
        isAuthenticated = true;
        localStorage.setItem("isAuthenticated", "true");
        updateUI();
    });

    updateUI();
});

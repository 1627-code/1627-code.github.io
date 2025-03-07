// Updated script.js with profile icon for login/logout

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");
    const profileIcon = document.getElementById("profile-icon");
    const profileDropdown = document.getElementById("profile-dropdown");
    const writeBlogButton = document.getElementById("write-blog-btn");
    
    // Check login status from localStorage
    let isLoggedIn = localStorage.getItem("loggedIn") === "true";
    updateUI(isLoggedIn);
    
    // Show/hide dropdown
    profileIcon.addEventListener("click", function () {
        profileDropdown.classList.toggle("hidden");
    });
    
    loginButton.addEventListener("click", function () {
        localStorage.setItem("loggedIn", "true");
        updateUI(true);
    });
    
    logoutButton.addEventListener("click", function () {
        localStorage.setItem("loggedIn", "false");
        updateUI(false);
    });
    
    function updateUI(isLoggedIn) {
        if (isLoggedIn) {
            profileIcon.style.display = "block";
            loginButton.style.display = "none";
            logoutButton.style.display = "block";
            writeBlogButton.style.display = "inline-block";
        } else {
            profileIcon.style.display = "block";
            loginButton.style.display = "block";
            logoutButton.style.display = "none";
            writeBlogButton.style.display = "none";
        }
    }
});

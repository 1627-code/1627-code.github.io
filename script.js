document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const writeBlogBtn = document.getElementById("writeBlogBtn");
    const profileIcon = document.getElementById("profileIcon");
    
    const adminUsername = "admin";
    const adminPassword = "password123";
    
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) {
            loginBtn.style.display = "none";
            logoutBtn.style.display = "inline-block";
            writeBlogBtn.style.display = "inline-block";
            profileIcon.style.display = "inline-block";
        } else {
            loginBtn.style.display = "inline-block";
            logoutBtn.style.display = "none";
            writeBlogBtn.style.display = "none";
            profileIcon.style.display = "none";
        }
    }
    
    loginBtn.addEventListener("click", function () {
        const username = prompt("Enter Username:");
        const password = prompt("Enter Password:");
        
        if (username === adminUsername && password === adminPassword) {
            localStorage.setItem("isLoggedIn", "true");
            checkLoginStatus();
            alert("Login successful!");
        } else {
            alert("Incorrect username or password.");
        }
    });
    
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        checkLoginStatus();
        alert("Logged out successfully!");
    });
    
    checkLoginStatus();
});

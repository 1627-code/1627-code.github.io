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
            if (loginBtn) loginBtn.style.display = "none";
            if (logoutBtn) logoutBtn.style.display = "inline-block";
            if (writeBlogBtn) writeBlogBtn.style.display = "inline-block";
            if (profileIcon) profileIcon.style.display = "inline-block";
        } else {
            if (loginBtn) loginBtn.style.display = "inline-block";
            if (logoutBtn) logoutBtn.style.display = "none";
            if (writeBlogBtn) writeBlogBtn.style.display = "none";
            if (profileIcon) profileIcon.style.display = "none";
        }
    }

    if (loginBtn) {
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
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            checkLoginStatus();
            alert("Logged out successfully!");
        });
    }

    checkLoginStatus();
});


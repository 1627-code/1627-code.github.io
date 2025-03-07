document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");
    const writeBlogButton = document.getElementById("write-blog-btn");
    const adminOptions = document.querySelectorAll(".admin-only");

    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) {
            adminOptions.forEach(el => el.style.display = "block");
            loginButton.style.display = "none";
            logoutButton.style.display = "block";
        } else {
            adminOptions.forEach(el => el.style.display = "none");
            loginButton.style.display = "block";
            logoutButton.style.display = "none";
        }
    }

    loginButton.addEventListener("click", function () {
        const password = prompt("Enter Admin Password:");
        if (password === "your-secure-password") {  // Change this to a more secure method later
            localStorage.setItem("isLoggedIn", "true");
            checkLoginStatus();
        } else {
            alert("Incorrect password!");
        }
    });

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        checkLoginStatus();
    });

    checkLoginStatus();
});

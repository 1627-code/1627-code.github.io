window.onload = function () {
    console.log("Page loaded, running script...");
    
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const writeBlogBtn = document.getElementById("writeBlogBtn");
    const profileIcon = document.getElementById("profileIcon");

    if (!loginBtn || !logoutBtn || !writeBlogBtn || !profileIcon) {
        console.error("One or more buttons were not found in the HTML!");
        return;
    }

    console.log("All buttons found, continuing script...");

    const adminUsername = "admin";
    const adminPassword = "password123";

    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        console.log("Login status:", isLoggedIn);

        loginBtn.style.display = isLoggedIn ? "none" : "inline-block";
        logoutBtn.style.display = isLoggedIn ? "inline-block" : "none";
        writeBlogBtn.style.display = isLoggedIn ? "inline-block" : "none";
        profileIcon.style.display = isLoggedIn ? "inline-block" : "none";
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
};

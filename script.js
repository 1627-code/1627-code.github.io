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
    const adminPassword = "Ebenezer2007@";

    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        console.log("Login status:", isLoggedIn);

        loginBtn.style.display = isLoggedIn ? "none" : "inline-block";
        logoutBtn.style.display = isLoggedIn ? "inline-block" : "none";
        writeBlogBtn.style.display = isLoggedIn ? "inline-block" : "none";
        profileIcon.style.display = isLoggedIn ? "inline-block" : "none";
    }

    loginBtn.addEventListener("click", function () {
    let username = prompt("Enter Username:");
    if (username === null) return; // If user cancels, stop execution
    username = username.trim();

    let password = prompt("Enter Password:");
    if (password === null) return; // If user cancels, stop execution
    password = password.trim();

    if (!username || !password) {
        alert("Username and password cannot be empty.");
        return;
    }

    if (username === "admin" && password === "Ebenezer2007@") {
        localStorage.setItem("isLoggedIn", "true");
        checkLoginStatus();
        alert("Login successful!");
    } else {
        alert("Incorrect username or password.");
    }
});


    checkLoginStatus();
};

window.onload = function () {
    console.log("Page loaded, running script...");

    // Get elements
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const writeBlogBtn = document.getElementById("writeBlogBtn");
    const profileIcon = document.getElementById("profileIcon");

    // Ensure elements exist
    if (!loginBtn || !logoutBtn || !writeBlogBtn || !profileIcon) {
        console.warn("Some elements not found. Ensure they exist in your HTML.");
    }

    // Default admin credentials (Avoid storing credentials in plain text in production)
    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "Ebenezer2007@"; 

    // Hide login button by default
    if (loginBtn) loginBtn.style.display = "none";

    // Function to check login status
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        const storedUsername = localStorage.getItem("username");

        console.log(`Login status: ${isLoggedIn}, Username: ${storedUsername}`);

        // Toggle elements based on login status
        if (loginBtn) loginBtn.style.display = isLoggedIn ? "none" : "none"; // Always hidden until Shift + L is pressed
        if (logoutBtn) logoutBtn.style.display = isLoggedIn ? "inline-block" : "none";
        if (writeBlogBtn) writeBlogBtn.style.display = isLoggedIn ? "inline-block" : "none";
        if (profileIcon) profileIcon.style.display = isLoggedIn ? "inline-block" : "none";
    }

    // Function to handle login
    function handleLogin() {
        const username = prompt("Enter Username:")?.trim();
        const password = prompt("Enter Password:")?.trim();

        if (!username || !password) {
            alert("Username and password cannot be empty.");
            return;
        }

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);
            checkLoginStatus();
            alert(`Welcome, ${username}! Login successful.`);
        } else {
            alert("Incorrect username or password.");
        }
    }

    // Function to handle logout
    function handleLogout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        checkLoginStatus();
        alert("Logged out successfully!");
    }

    // Toggle login button with Shift + L
    document.addEventListener("keydown", function (event) {
        if (event.shiftKey && event.key.toLowerCase() === "l") {
            if (loginBtn) {
                loginBtn.style.display = loginBtn.style.display === "none" ? "inline-block" : "none";
            }
        }
    });

    // Attach event listeners
    loginBtn?.addEventListener("click", handleLogin);
    logoutBtn?.addEventListener("click", handleLogout);

    // Initialize login status
    checkLoginStatus();
};

window.onload = function () {
    console.log("Page loaded, running script...");

    // Get elements
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const writeBlogBtn = document.getElementById("writeBlogBtn");
    const profileIcon = document.getElementById("profileIcon");

    // Ensure all required elements exist
    if (!loginBtn || !logoutBtn || !writeBlogBtn || !profileIcon) {
        console.error("One or more required buttons were not found in the HTML!");
        return;
    }

    console.log("All buttons found, continuing script...");

    // Default admin credentials
    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "Ebenezer2007@";

    // Function to check login status
   function checkLoginStatus() {
    const storedUsername = localStorage.getItem("username");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    console.log(`Login status: ${isLoggedIn}, Username: ${storedUsername}`);

    loginBtn.style.display = isLoggedIn ? "none" : "inline-block";
    logoutBtn.style.display = isLoggedIn ? "inline-block" : "none";
    writeBlogBtn.style.display = isLoggedIn ? "inline-block" : "none";

    if (profileIcon) {
        profileIcon.style.display = isLoggedIn ? "inline-block" : "none";
        console.log(`Profile icon visibility: ${profileIcon.style.display}`);
    }
}

    // Function to handle login
    function handleLogin() {
        let username = prompt("Enter Username:");
        if (username === null) return; // If user cancels, exit
        username = username.trim();

        let password = prompt("Enter Password:");
        if (password === null) return; // If user cancels, exit
        password = password.trim();

        // Ensure both fields are filled
        if (!username || !password) {
            alert("Username and password cannot be empty.");
            return;
        }

        // Validate credentials
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username); // Store username
            checkLoginStatus();
            alert(`Welcome, ${username}! Login successful.`);
        } else {
            alert("Incorrect username or password.");
        }
    }

    // Function to handle logout
    function handleLogout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username"); // Clear username
        checkLoginStatus();
        alert("Logged out successfully!");
    }

    // Attach event listeners
    loginBtn.addEventListener("click", handleLogin);
    logoutBtn.addEventListener("click", handleLogout);

    // Initial check
    checkLoginStatus();
};

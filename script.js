<script>
        // Function to create a new account
        function createAccount() {
            let username = prompt("Enter a new username:");
            let password = prompt("Enter a new password:");

            if (username && password) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                alert("Account successfully created!");
            } else {
                alert("Account creation failed. Please provide valid information.");
            }
        }

        // Function to log in with saved credentials
        function logIn() {
            let username = prompt("Enter your username:");
            let password = prompt("Enter your password:");

            let storedUsername = localStorage.getItem("username");
            let storedPassword = localStorage.getItem("password");

            if (username === storedUsername && password === storedPassword) {
                alert("Login successful! Redirecting to diagnostic test...");
                // Placeholder: redirect logic can go here (e.g., window.location.href = 'diagnosticTest.html');
            } else {
                alert("Invalid username or password.");
            }
        }

        // Function to view previously saved diagnostic results
        function viewResults() {
            let previousResults = localStorage.getItem("results");

            if (previousResults) {
                alert("Here are your previous diagnostic results: " + previousResults);
            } else {
                alert("No previous results found.");
            }
        }
    </script>
</body>
</html>

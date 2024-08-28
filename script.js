const validCredentials = [
    { username: "admin", password: "password123" },
    { username: "user1", password: "letmein" },
    { username: "hacker", password: "pwned" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const isValid = validCredentials.some(
        cred => cred.username === username && cred.password === password
    );

    if (isValid) {
        window.location.href = "nextPage.html"; // Replace with the URL of the next part of the website
    } else {
        document.getElementById('error-message').textContent = "Access Denied";
    }
});

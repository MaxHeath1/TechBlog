document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('Logged in successfully');
            // Redirect to the dashboard page
            window.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    }
});

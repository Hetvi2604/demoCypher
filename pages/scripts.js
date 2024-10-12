// login signup

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.auth-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    form.addEventListener('submit', function(event) {
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            alert('Passwords do not match!');
        }
    });
});
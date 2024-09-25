function toggleForms() {
    const registerForm = document.getElementById("registerForm");
    const signInForm = document.getElementById("signInForm");

    if (registerForm.style.display === "none") {
        registerForm.style.display = "block";
        signInForm.style.display = "none";
    } else {
        registerForm.style.display = "none";
        signInForm.style.display = "block";
    }
}

function validateRegistrationForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (password === "") {
        alert("Password must be filled out");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

function validateSignInForm() {
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (password === "") {
        alert("Password must be filled out");
        return false;
    }

    return true;
}

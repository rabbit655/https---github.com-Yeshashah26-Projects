function validatePassword() {
    let pwd = document.getElementById("passwordInput");
    let errorMessage = document.getElementById("error-message");
    if (pwd.value.length <8)
        errorMessage.textContent = "Password must be atleast 8 Characters Long...."
    else if(!/[A-Z]/.test(pwd.value))
        errorMessage.textContent = "Password must contain at least one uppercase letter...."
    else if(!/[a-z]/.test(pwd.value))
        errorMessage.textContent = "Password must contain at least one lowercase letter...."
    else if(!/[0-9]/.test(pwd.value))
        errorMessage.textContent = "Password must contain at least one number...."
    else if(!/[!@#$%^&*(),.?":{}|<>]/.test(pwd.value))
        errorMessage.textContent = "Password must contain at least one special character...."
    else
        errorMessage.textContent = "Password is valid!";
}
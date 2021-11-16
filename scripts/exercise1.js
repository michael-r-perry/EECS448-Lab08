function validate() {
    let pwd1 = document.getElementById("password1").value;
    let pwd2 = document.getElementById("password2").value;

    if (pwd1.length < 8)
    {
        alert("ERROR: Password 1 needs to be at least 8 characters long!");
    }
    else if (pwd2.length < 8)
    {
        alert("ERROR: Password 2 needs to be at least 8 characters long!");
    }
    else if (pwd1 != pwd2)
    {
        alert("ERROR: Passwords need to match exactly!");
    }
    else 
    {
        alert("Congradulations! Your password has been validated!");
    }
}
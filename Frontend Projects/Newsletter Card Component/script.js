document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault(); 
        const emailValue = document.getElementById('email').value

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailPattern.test(emailValue)) {
            alert("Hurrah, You're successfully subscribed!")
        }
        else {
            alert("Error: Invalid email!")
        }
    })   
})
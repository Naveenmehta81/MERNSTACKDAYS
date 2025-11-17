let btn = document.querySelector('.login-btn');

btn.addEventListener("click", function(event) {
    event.preventDefault();  // ✔ correct place
    console.log('clicked');
});



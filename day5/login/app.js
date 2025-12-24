let btn = document.querySelector('.login-btn');
let emailin = document.querySelector('.input-box-email');
let passwordin = document.querySelector('.input-box-password')



btn.addEventListener("click", function(event) {
    event.preventDefault();  // ✔ correct place


   

        let email = emailin.value;
        let password = passwordin.value;
        

        console.log(email , password);
    



});



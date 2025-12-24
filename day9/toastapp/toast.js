let toastBox  = document.querySelector('#toastBox');




let successmssg = "succesfullycompleted";
let errormsg = "error find!";
let invalid  = "invalid input check again";



  
function showtost(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;

    toastBox.appendChild(toast);


    setTimeout(() =>{
        toast.remove();
    }, 3000);
}

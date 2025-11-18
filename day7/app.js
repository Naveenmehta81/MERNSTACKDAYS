const notescontainer = document.querySelector(".note-continer");

const createbtn = document.querySelector(".btn");   

const notes = document.querySelectorAll(".input-box");


function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}


function updatedStorage(){
    localStorage.setItem("notes" , notescontainer.innerHTML);

}

showNotes();

createbtn.addEventListener('click' , function(){
     let inputbox = document.createElement('p');   // p bna diya 
     let img = document.createElement('img');   // img bna diya 
     inputbox.className = "input-box";         // class bna diya 
     inputbox.setAttribute( "contenteditable","true");  // atrribute bna diya 
     img.src = "images/delete.png";
     
     inputbox.appendChild(img);
     notescontainer.appendChild(inputbox);

     updatedStorage();

});

notescontainer.addEventListener("click",function(e){
    if(e.target.tagName == 'IMG'){
        e.target.parentElement.remove();
         updatedStorage()
    }
    else if(e.target.tagName == 'p'){
        notes = document.querySelector(".input-box");
        notes.forEach(nt =>{
            nt.onKeyup = function(){    //.onKeyup: This is a direct property on the HTML element object. 
                                        // Assigning a function to this property sets the code that runs when the keyup event occurs on that element.
                updatedStorage();
            }
        })
    } 

});
 

document.addEventListener("keydown" , event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLinebreak");
        event.preventDefault();
}
})
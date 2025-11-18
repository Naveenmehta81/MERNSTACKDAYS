// import {setuptodolist}  from './app.js';
// import { search } from './search.js';

// get all componet i need to use 
let btn = document.querySelector(".btn");
let input = document.querySelector(".inp");
let ul = document.querySelector("ul");
let searchinp = document.querySelector('.srcinp');
//let list  = document.querySelectorAll("li");  // chg yha nhi use kiya filter ke under use kr liya 

// button add event listner

// for set task 
function saveTolocalstorage() {
    let list = ul.querySelectorAll("li");
    let tasks = [];

    list.forEach(li => {
        tasks.push(li.firstChild.textContent.trim());
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// for get task

function loadFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem("tasks"));

    if (!data) return;

    data.forEach(text => {
        let item = document.createElement('li');

        let taskText = document.createTextNode(text + " ");
        item.appendChild(taskText);

        let editbtn = document.createElement('button');
        editbtn.innerHTML = "edit";
        editbtn.classList.add("edit");

        let dltbutton = document.createElement('button');
        dltbutton.innerText = "Delete";
        dltbutton.classList.add("delete");

        item.appendChild(dltbutton);
        item.appendChild(editbtn);
        ul.appendChild(item);
    });
}
loadFromLocalStorage(); 
























btn.addEventListener("click", function() {

    let item = document.createElement('li');
     // Create a text node for the task content to cleanly separate it from buttons   ise concept is dyanic search ho rha h comment kr ke use krna 
    let taskText = document.createTextNode(input.value + " "); 
    item.appendChild(taskText); 
   
  
    // edit btn  create 
    let editbtn = document.createElement('button');
    editbtn.innerHTML = "edit";
    editbtn.classList.add("edit");
   
    // dlt button  creaate
    let dltbutton = document.createElement('button');
    dltbutton.innerText = "Delete";
    dltbutton.classList.add("delete");
   
    // dltbutton.addEventListener("click", function() {
    //     item.remove(); 
    // });

    item.appendChild(dltbutton);
    item.appendChild(editbtn);
    ul.appendChild(item);

    input.value = "";  // after input was add it should be empty

    saveTolocalstorage();
});


// delete and edit logic 
 
    ul.addEventListener('click', function(e) {       
    
    if (e.target.classList.contains('delete')) {
       
        e.target.parentElement.remove(); // removes the clicked <li>
    }
    
     if (e.target.classList.contains('edit')) {
        
    let li = e.target.parentElement;
    let textNode = li.firstChild;   // yha vo text node use kri apno ne 
    let oldText = li.firstChild.textContent.trim();
    let newText = prompt("Edit your task:", oldText);

    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText + " ";  // update text

      saveTolocalstorage();                              }
    } 

});
// search code

searchinp.addEventListener('input', filter);
 

function filter() {
    let search = searchinp.value.toLowerCase();
    let list = ul.querySelectorAll("li");  // yha pe all list bula li
    
    for (let i = 0; i < list.length; i++) {
        let item = list[i].firstChild.textContent;
     
         if (search == "") {
            list[i].style.display = 'flex'; // use flex // show all // i use block  
           
          
        } else if (item.indexOf(search) == -1) {
            list[i].style.display = 'none';
            console.log("none");   // use flex  Show match

        } else {
            list[i].style.display = 'flex';
            // use none  Hide non-match
           
        }
    }
}





// setuptodolist(btn,input,ul);
// search(searchinp,list);
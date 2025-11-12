let btn = document.querySelector(".btn");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement('li');
    item.innerHTML = input.value;

    let dltbutton = document.createElement('button');
    dltbutton.innerText = "Delete";
    dltbutton.classList.add("delete");

    
    // dltbutton.addEventListener("click", function() {
    //     item.remove(); 
    // });

    item.appendChild(dltbutton);
    ul.appendChild(item);

    input.value = "";
});



ul.addEventListener('click', function(e) {       
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove(); // removes the clicked <li>
    }
});

// e stands for event object It contains all details about the click
// e.target

// e.target gives you the exact element that was clicked.
// It could be:

// the <li>

// the <button>

// or anything inside the <ul>

// 4. e.target.classList.contains('delete')

// This checks:

// “Did the clicked element have the class delete?”

// If yes, that means the user clicked on a delete button.
// If no, then it ignores the click.

// 5. e.target.parentElement.remove();

// If the delete button was clicked, this line runs:

// e.target → the <button>

// e.target.parentElement → its parent <li>

// .remove() → deletes that <li> from the page.
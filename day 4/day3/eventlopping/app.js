let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li= document.querySelectorAll('li');

div.addEventListener("click" , function() {
   
    console.log("div was clicked ");
});

ul.addEventListener("click", function(){
     event.stopPropagation();
    console.log("ul was clicked ");
});


for(list of li){
list.addEventListener("click", function(){
     event.stopPropagation();
    console.log("li was clicked ");
})
};

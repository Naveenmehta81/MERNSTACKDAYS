// let search = document.querySelector('.srcbtn');

function search(searchinp,list){
searchinp.addEventListener('input', filter);

function filter() {
    let search = searchinp.value.toLowerCase();

    for (let i = 0; i < list.length; i++) {
        let item = list[i].innerText.toLowerCase();

        if (search == "") {
            list[i].style.display = 'block';
        } else if (item.indexOf(search) == -1) {
            list[i].style.display = 'none';
        } else {
            list[i].style.display = 'block';
        }
    }
}

}

export {search};


















// function filter() {
//     let search = searchinp.value.toLowerCase();
//     list.forEach(function(li){
//         let text = li.innerHTML.toLowerCase();
//         let item = text.indexOf(search);
//         if(search == " "){
//             li.style.display = 'block';
//         }else if( item == -1){
//              li.style.display = 'none';
//         }else{
//              li.style.display = 'block';
//         }
//     })
   
// }































// search.addEventListener('click', function(){
//     let input = searchinp.value.tolowercase();
//     let item = ul.querySelectorAll('li');

//     for(let i = 0 ; i < item.length ; i++){
//         let text = item[i].textContent.tolowercase();

//         if(item.include(input)){
//             item[i].style.display = 'block';
//         }else{
//             item[i].style.display = 'none';
            
//         }
//     }


// })
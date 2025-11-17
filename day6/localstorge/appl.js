let userobj ={      // create a object 
    name : "naveen ",
    age : 24 ,
    job : "intern"
};

console.log(userobj);

window.localStorage.setItem('Language', 'JavaScript');

window.localStorage.setItem('user' , JSON.stringify(userobj));  // use local storage setitem and it store only string so we need to convert
                                                                // using json.stringify() fucntion


 // let users = window.localStorage.getItem(userobj);           // in that use key                                                    
  let users = window.localStorage.getItem('user');            // using getitem and key we retive the data 
  let Languages = window.localStorage.getItem('Language');

  console.log(users);
  console.log(Languages);


// remove item 
//  let remove =  window.localStorage.removeItem('Language');
// console.log(remove);
console.log( window.localStorage.removeItem('Language'));


console.log(localStorage.key(1));  //




  
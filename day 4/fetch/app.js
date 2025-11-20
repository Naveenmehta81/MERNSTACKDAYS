// using post to send data server or api

fetch(`url`), {
    method : 'post' ,    //Tells the server we are sending data
     Headers : {         //Extra info about the request — here, it says we are sending JSON
        'Content-Type': 'application/json' 
     }
     body: JSON.stringify()({      // convert JS object to JSON
    name: 'Naveen Mehta',
    age: 22
    });

.then(response => response.json())  // convert response to JSON    // Handles the response after the request is complete
.then(data => console.log(data))    // use the response data       // Handles errors (like network failure)
.catch(error => console.error('Error:', error));
}
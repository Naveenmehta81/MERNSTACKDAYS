let display = document.getElementById("display-res");

let allButtons = document.querySelectorAll('input[type = "button"]');


function appendValue(value) {
    display.value += value;
}

allButtons.forEach(button => {
    // We attach an event listener to every single button
    button.addEventListener('click', (event) => {
        console.log("cliked");
        // Get the 'value' attribute of the specific button that was clicked
        const buttonValue = event.target.value;
        
        // Handle special operations first (like AC, DE)
        if (buttonValue === 'Ac') {
            display.value = ''; // Clear the display
        } else if (buttonValue === 'DE') {
            // Delete the last character
            display.value = display.value.slice(0, -1);
        } else if(buttonValue == "=") {
           try {
                // 1. Evaluate the string expression
                const result = eval(display.value);
                
                // 2. Assign the result back to the display input
                display.value = result;
            } catch (error) {
                // 3. Handle errors (like incomplete or invalid expressions)
                display.value = 'Error'; 
                alert("Calculation Error:", error);
            }
        
        }else{
             // For all numbers and operators, append the value
            appendValue(buttonValue);
        }
    });
});



// concept used 
// 1 getElementById , querySelectorAll , queeyselctor  ;
// 2  foreach()
// 3 addEventListener
// 4 event.target , event.value
// 5 if elseif else 
// 6 try catch  for = to handel evalution 
// 7 eval() build in functon to cal all input 
// 8 slice 
// 9    display.value += value; in this if i use display.value = value so only 1 one time input i display but if i pres 777 it not possible so i use += 
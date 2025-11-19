const userinput  = document.querySelector("#date");   // user input dega   
const calbtn = document.querySelector('.input-box button');    // fir click kre ga 


const  resultYears  = document.querySelector("#years");     // after clicked then dispaly year
const resultMonths  = document.querySelector("#months");      // after clicked then dispaly month
const  resultDays = document.querySelector("#days");          // after clicked then dispaly day
const reldisplay = document.querySelector('.result-display');    // isme ye  sb add hojye 

const statusMessage = document.querySelector("#status-message");


// geting all componet is done 


userinput.max = new Date().toISOString().split("T")[0];   // this is for current date and it set to max it means we not select 2026 ...  


// add eventlistner 

calbtn.addEventListener("click", calculateage);   // good practice is we make a sperete fucntion and then addd



function calculateage(){
     
    



    const birthdaystring = userinput.value;  // user input date store karva di 

    if(!birthdaystring){    // ager user input hi na de and click kr de 
        alert("select date of birth ");
        return ;
    }
    // use ne click ke diya 
    const birthday = new Date(birthdaystring);   // userinput  ka input store kr liya 

    const todaydate = new Date();  // if we difine a new date() without argumetn then it show current date year month 

    // all logic to get age is here 
    let years =  todaydate.getFullYear() -birthday.getFullYear();
    let months =  todaydate.getMonth() - birthday.getMonth();
    let days =  todaydate.getDate() -birthday.getDate();


    // Adjust months and years if the current month/day is before the birth month/day
    
    // If the current day is before the birth day, borrow a month (30/31 days)
    if (days < 0) {
        months--;
        // Get the number of days in the *previous* month (the one we borrowed from)
        // new Date(year, month, 0) returns the last day of the *previous* month
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    // If the current month is before the birth month (or months is < 0 after adjustment), borrow a year (12 months)
    if (months < 0) {
        years--;
        months += 12; // Add 12 months
    }
    if (years < 0) {
        alert("Invalid Date: Please select a past date.");
        // Clear the display
        resultYears.textContent = '--';
        resultMonths.textContent = '--';
        resultDays.textContent = '--';
        return;
    }

    // Display Result  result after calculating 
    resultYears.textContent = years;
    resultMonths.textContent = months;
    resultDays.textContent = days;
  
}


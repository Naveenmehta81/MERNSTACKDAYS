const question =  [       //  we create array and in array object question and make ans array then object it nested array nd obj concept
    {  
        question : "capital of india ?",
        answer : [
            {text : "indore" , correct : false},
            {text : "delhi" , correct : true},
            {text : "surat" , correct : false},
            {text : "mp" ,correct : false}
        ]
    },
      {
        question : "my full name ?",
        answer : [
            {text : "indore" , correct : false},
            {text : "delhi" , correct : false},
            {text : "surat" , correct : false},
            {text : "naveen metha" ,correct : true}
        ]
    },
      {
        question : "my city?",
        answer : [
            {text : "indore" , correct : true},
            {text : "delhi" , correct : false},
            {text : "surat" , correct : false},
            {text : "mp" ,correct : false}
        ]
    },
      {
        question : " cureently in live  ?",
        answer : [
            {text : "indore" , correct : false},
            {text : "delhi" , correct : false},
            {text : "surat" , correct : true},
            {text : "mp" ,correct : false}
        ]
    }

];


const questionElement = document.getElementById("question");   // he tag doubt hai 
const answerButtons = document.getElementById("answer-here");  // ans button liya 
const nextButton = document.getElementById("next-btn");    // next button liya 

 // isme question index and ans cout ho rhe hai to stating me 0 intlized kr diya hai 
let cureentQuestionIndex = 0 ;   
 let score = 0 ;

// restart quize then ye function run hoga 
 function starquize(){
 cureentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
    
  showQuestion();
   }

function showQuestion(){
    resetstate();
    let currentQuestion = question[cureentQuestionIndex];  
    let questionNo = cureentQuestionIndex + 1 ;   // it show question no 1 2 3 4 
    questionElement.innerHTML = questionNo  + " . " + currentQuestion.question ;  // he tag me likha huva h na vo chg hoga 


    currentQuestion.answer.forEach(answer => {     // curent question hai use ans ke under and then itreate hoga 
        const button = document.createElement("button");   
        button.innerHTML = answer.text;   // ans ke under text he usko add kr diya 
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
        
    });
}

function resetstate(){
    nextButton.style.display  = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
}
}

function selectAnswer(e){
    const selectdBtn = e.target;
    const isCorrect = selectdBtn.dataset.correct == "true";
    if(isCorrect){
        selectdBtn.classList.add("correct");
        score++;
    }else{
        selectdBtn.classList.add("incorrect"); 
    }
    // 2. & 3. FIX: Loop through ALL buttons to disable them and highlight the correct one
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct"); // Highlight the actual correct answer
        }
        button.disabled = true; // Disable all buttons
    });

    // 4. FIX: Show the next button
    nextButton.style.display = "block";
}


function showcore(){
    resetstate();
    questionElement.innerHTML = `YOU SCORED ${score} out of ${question.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = 'block';
}

function handleNextButton(){
    cureentQuestionIndex++;
    if(cureentQuestionIndex < question.length){
        showQuestion();
    }else{
        showcore();
    }
}





nextButton.addEventListener("click", ()=>{
    if(cureentQuestionIndex < question.length){
        handleNextButton();
    }else{
         starquize();
    }
})

 starquize();
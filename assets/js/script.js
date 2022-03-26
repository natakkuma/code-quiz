//Variables

    //Timer Variables
    var timeDisplay = document.getElementById("timeDisplay");
    var timer = document.getElementById("timer");
    

    //Quiz Start Variables
    var startBtn = document.getElementById("startBtn");

    //Quiz Content Variables
    var question = document.getElementById("question");
    var mc1 = document.getElementById("mc1");
    var mc2 = document.getElementById("mc2");
    var mc3 = document.getElementById("mc3");
    var mc4 = document.getElementById("mc4");

    //Quiz Questions Array
    var questions = [

        //Question 1
        {
            question: "Commonly used data types do NOT include:",
            choices: ["1. booleans", "2. strings", "3. parentheses", "4. numbers"],
            correctAnswer: "1"
        },

        //Question 2
        {
            question: "The condition in an if / else statment is enclosed within _________.",
            choices: ["1. curly brackets", "2. quotes", "3. parentheses", "4. square brackets"],
            correctAnswer: "2"
        },

        //Question 3
        {
            question: "Arrays in Javascript can be used to store _________.",
            choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
            correctAnswer: "3"
        },

        //Question 4
        {
            question: "String values must be enclosed within ________ when being assigned to variables.",
            choices: ["1. commmas", "2. parentheses", "3. quotes", "4. curly brackets"],
            correctAnswer: "4"
        },

        //Question 5
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
            correctAnswer: "3"
        }
    ];


    //Quiz Scoring Variables
    var score = 0;
    var timeLeft = 0;
    var quizPoints = 0;
    var questionNumber = 0;

//Functions

//QUIZ PLAY
//startQuiz Function - To Start Quiz
function startQuiz() {
    
    //Display Quiz Content
    quizStart.style.display = "none";
    quizQ.style.display = "block";
    multipleChoice.style.display = "block"

    //Set Time
    timeLeft = 75;
    startTimer();

    //Set Questions
    quizContent(questionNumber);

    console.log("start button clicked");
};

//EventListener
//When Start Quiz Button is Clicked - startQuiz Function Starts
startBtn.addEventListener("click", startQuiz);

//startTimer Function - Timer Starts 
function startTimer() {

    let timerInterval = setInterval (function (){
        timeLeft--;
        timeDisplay.textContent = '${timeLeft} seconds';

        if (timeLeft === 0 || questionNumber === questions.length) {
            clearInterval (timerInterval);
            quizQ.style.display = "none";
            multipleChoice.style.display = "none";
            score.textContent = timeLeft;

        }
    }, 1000);

};

//quizContent Function - Quiz Question & Answer Display
function quizContent(x) {

    if (x < questions.length) {
         quizQ.textContent = questions[questionNumber].question;
         mc1.textContent = question[questionNumber].choices[0];
         mc2.textContent = question[questionNumber].choices[1];
         mc3.textContent = question[questionNumber].choices[2];
         mc4.textContent = question[questionNumber].choices[3];
    }

};

//QUIZ SCORING
//checkAnswer Function - Checks answer selected by user
function checkAnswer(answer) {

    //check if correct
    if (questions[questionNumber].correctAnswer === questions[questionNumber].choices[correctAnswer]) {

        //correct - increase score
        //correct - alert correct

    }
    // if incorrect
    else {
        //wrong answer - deduct 10 sec
        //wrong answer - alert wrong & provide correct answer
    }
}

//APPLICATIONS

//EVENT LISTENERS



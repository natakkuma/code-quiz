//Variables

    //Timer Variables
    var timeDisplay = document.getElementById("timeDisplay");
    var timer = document.getElementById("timer");
    

    //Quiz Start Variables
    var quizStart = document.getElementById("quizIntro");
    var startBtn = document.getElementById("startBtn");

    //Quiz Content Variables
    var quizContent = document.getElementById("quizContent");
    var questionQ = document.getElementById("question");
    var mc1 = document.getElementById("mc1");
    var mc2 = document.getElementById("mc2");
    var mc3 = document.getElementById("mc3");
    var mc4 = document.getElementById("mc4");
    var checkAnswer = document.getElementById("checkAnswer");

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

    //Score Display Variables
    var scoreDisplay = document.getElementById("scoreDisplay");
    var finalScore = document.getElementById("finalScore");
     
    //Player Initials Form Variables
    var playerInitialsInput = document.getElementById("playerInitials");
    var submitInitialBtn = document.getElementById("submitInitialBtn");

    //High Score List Variables
    var viewScoresBtn = document.getElementById("viewScores");
    var highScores = document.getElementById("highScores");
    var scoreList = document.getElementById("scoreList");
    var returnBtn = document.getElementById("returnBtn");

    //Quiz Scoring Variables
    var score = 0;
    var timer = 0;
    var scoreFinal;
    var questionNumber = 0;

//Functions

//QUIZ PLAY
//startQuiz Function - To Start Quiz
function startQuiz() {
    
    //Display Quiz Content
    quizStart.style.display = "none";
    quizContent.style.display = "block";

    //Set Time
    timer = 75;
    startTimer();

    //Set Questions
    playQuiz(questionNumber);

    console.log("start button clicked");
};

//EventListener
//When Start Quiz Button is Clicked - startQuiz Function Starts
startBtn.addEventListener("click", startQuiz);

//startTimer Function - Timer Starts 
function startTimer() {

    let timerInterval = setInterval (function (){
        timer --;
        timeDisplay.textContent = '${timer} seconds';

        if (timer === 0 || questionNumber === questions.length) {
            clearInterval (timerInterval);
            quizContent.style.display = "none";
            multipleChoice.style.display = "none";
            score.textContent = timer;

        }
    }, 1000);

};

//playQuiz Function - Quiz Question & Answer Display
function playQuiz(x) {

    if (x < questions.length) {
         questionQ.textContent = questions[questionNumber].question;
         mc1.textContent = questions[questionNumber].choices[0];
         mc2.textContent = questions[questionNumber].choices[1];
         mc3.textContent = questions[questionNumber].choices[2];
         mc4.textContent = questions[questionNumber].choices[3];
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



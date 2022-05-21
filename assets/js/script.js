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
            answer: "1. booleans"
        },

        //Question 2
        {
            question: "The condition in an if / else statment is enclosed within _________.",
            choices: ["1. curly brackets", "2. quotes", "3. parentheses", "4. square brackets"],
            answer: "2. quotes"
        },

        //Question 3
        {
            question: "Arrays in Javascript can be used to store _________.",
            choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
            answer: "3. booleans"
        },

        //Question 4
        {
            question: "String values must be enclosed within ________ when being assigned to variables.",
            choices: ["1. commmas", "2. parentheses", "3. quotes", "4. curly brackets"],
            answer: "4. curly brackets"
        },

        //Question 5
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
            answer: "3. for loops"
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
    var questionIndex = 0;
    var scoreFinal;
    var questionNumber = 0;
    var totalTime = 30;


//FUNCTIONS

//QUIZ PLAY
//startQuiz Function - To Start Quiz
function startQuiz() {
    
    //Q
    questionIndex = 0;

    //Timer
    totalTime = 29;
    timeDisplay.textContent = totalTime;
    playerInitialsInput.textContent = "";

    //Display Quiz Content & Timer
    quizStart.style.display = "none";
    quizContent.style.display = "block";
    timer.style.display = "block";

    //Set Questions
    playQuiz();

    console.log("start button clicked");

    //startTimer Function - Timer Starts 
    function startTimer() {

        let timerInterval = setInterval (function ()
        
        {
            totalTime--;
            timeDisplay.textContent ="Time:" + totalTime;

            if (timer<0){
                timer = 0
            }

            if (timer === 0 || questionNumber === questions.length) {
                clearInterval (timerInterval);
                quizContent.style.display = "none";
                multipleChoice.style.display = "none";
                score.textContent = timer;

            }
        }, 1000);

    };

    //Set Time
    startTimer();

};

//playQuiz Function - Quiz Question & Answer Display
function playQuiz() {
    //quizContent.style.display = "block";

    questionQ.textContent = questions[questionIndex].question;
    mc1.textContent = questions[questionIndex].choices[0];
    mc2.textContent = questions[questionIndex].choices[1];
    mc3.textContent = questions[questionIndex].choices[2];
    mc4.textContent = questions[questionIndex].choices[3];

};

//QUIZ SCORING
//scoreAnswer Function - Checks answer selected by user and gives points if applicable
function scoreAnswer(answer) {

    //display correct or wrong
    checkAnswer.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        //IF correct answer, add 1 score to final score
        score++;
       
        checkAnswer.textContent = "Correct!";
    } else {
        //ELSE wrong answer, deduct 5 seconds from time
        totalTime -= 5;
        timeDisplay.textContent = "Time:" + totalTime;
        checkAnswer.textContent = "Wrong! The correct answer is " + questions[questionIndex].answer + ".";
    }

    questionIndex++;

    //continue with the remaining questions 
    if (questionIndex < questions.length) {
        playQuiz();

    } 
    
    else {
        // if no more questions, end game
        endGame();
    }
}

//ANSWER SELECTION FUNCTIONS
    function select1() { scoreAnswer(0); }
    function select2() { scoreAnswer(1); }
    function select3() { scoreAnswer(2); }
    function select4() { scoreAnswer(3); }

//END GAME & DISPLAY SCORE FUNCTION
    function endGame() {
        scoreDisplay.style.display = "block";
        quizContent.style.display = "none";
        quizIntro.style.display = "none";
        timer.style.display = "none";
        timeDisplay.style.display = "block";

        //Show Player Final Score
        finalScore.textContent = score;
    }

//FUNCTION - ENTER PLAYER SCORE & COMPILE SCORE LIST IN LOCAL STORAGE
function storeScores(event) {
    
    event.preventDefault();

    //Check if player initials were inputted
    if (playerInitialsInput.value === "") {
        alert("Please enter your initials.");
        return;
    } 

    quizStart.style.display = "none";
    timer.style.display = "none";
    timeDisplay.style.display = "none";
    scoreDisplay.style.display = "none";
    highScores.style.display = "block";   

    //Store scores in local storage
    var savedScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedScores)
    }

    var playerScore = {
        initials: playerInitialsInput.value,
        score: finalScore.textContent
    };

    console.log(playerScore);
    scoresArray.push(playerScore);

    //Stringify Array for Local Storage
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    //Display high scores
    displayHighScores();
}

//FUNCTION - DISPLAY HIGH SCORES LIST
var i = 0;
function displayHighScores() {

    quizStart.style.display = "none";
    timer.style.display = "none";
    quizContent.style.display = "none";
    timeDisplay.style.display = "none";
    scoreDisplay.style.display = "none";
    highScores.style.display = "block";

    var savedScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedScores === null) {
        return;
    }
    console.log(savedScores);

    var storedScores = JSON.parse(savedScores);

    for (; i < storedScores.length; i++) {
        var newScore = document.createElement("p");
        newScore.innerHTML = storedScores[i].initials + ": " + storedScores[i].score;
        scoreList.appendChild(newScore);
    }
}

//EVENT LISTENERS

//QUIZ

//When Start Quiz Button is Clicked - startQuiz Function Starts
startBtn.addEventListener("click", startQuiz);

//When an MC answer is clicked - select function starts
mc1.addEventListener("click", select1);
mc2.addEventListener("click", select2);
mc3.addEventListener("click", select3);
mc4.addEventListener("click", select4);


//SCORE SUBMISSION

//When Player Initials and Scores are submitted - Scores are stored locally
submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

//When View Scores Button is Clicked - Score List Appears
viewScoresBtn.addEventListener("click", function(event) { 
    displayHighScores(event);
});

//Return to Home Page Button 
returnBtn.addEventListener("click", function() {
    quizStart.style.display = "block";
    highScores.style.display = "none";
});


const questionElement = document.getElementById("question");

const answersElement = document.getElementById("answers");

const startBtn = document.getElementById("start-btn");

const nextBtn = document.getElementById("next-btn");

const restartBtn = document.getElementById("restart-btn");


const questions = [

    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Text Multiple Language",
            "Home Text Machine Language"
        ],

        correctAnswer: "Hyper Text Markup Language"
    },

    {
        question: "Which Language is used for Styling?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        correctAnswer: "CSS"
    },

    {
        question: "Which language makes a website interactive?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        correctAnswer: "JavaScript"
    }

];



let currentQuestionIndex = 0;

let score = 0


function showQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    answersElement.innerHTML = "";


    currentQuestion.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;



        button.addEventListener("click", function() {

            if (option === currentQuestion.correctAnswer) {

                button.style.backgroundColor = "green";

                score++;

            } else {

                button.style.backgroundColor = "red";

            }

            answersElement.querySelectorAll("button").forEach(function(answerbutton){

                answerbutton.disabled = true;

                if(answerbutton.textContent === currentQuestion.correctAnswer){

                    answerbutton.style.backgroundColor = "green"

                }

                nextBtn.style.display = "inline-block"
            })

        });


        answersElement.appendChild(button);

    });

}

nextBtn.addEventListener ("click" ,function(){
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();

        nextBtn.style.display = "none"

    }else{

        questionElement.textContent = "Quiz Complete! Your Score :"+ score + " / " + questions.length

        answersElement.innerHTML = "";

        nextBtn.style.display = "none"

        restartBtn.style.display = "inline-block"

    }
})


startBtn.addEventListener("click", function() {

    showQuestion();

    startBtn.style.display = "none";

});

restartBtn.addEventListener("click" , function(){

    currentQuestionIndex = 0;

    score = 0;

    restartBtn.style.display = "none"

    nextBtn.style.display = "none"

    showQuestion();
})
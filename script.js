const questions = [
    {
        question: "Whitch is  the largest desert in the world ? ",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct:false },
            { text: "Sahara", correct: false },
            { text: "Antartica", correct:true },
        ]
    },
    {
        question: "Whitch is largest animal in the world ? ",
        answers: [
            { text: "shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Whitch is smallest country the world ? ",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: true },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },
        ]
    },
    {
        question: "Whitch is the smallest continent in the world ? ",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0 ;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." +currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}


const questions = [
    {
        question: "Which is the largest continent in the world",
        answers: [
            {text:"Australia" , correct: false},
            {text:"Asia" , correct: true},
            {text:"Europe" , correct: false},
            {text:"Antartica" , correct: false}
        ]
    },
    {
        question: "How many alphabets are there from A to Z",
        answers:[
            {text:"22",correct: false},
            {text:"28",correct: false},
            {text:"26",correct: true},
            {text:"24",correct: false}
        ]
    },
    {
        question: "What is the abbrevation of ATM",
        answers:[
            {text:"Automated Teller Machine" , correct:true},
            {text:"Autofunction Talking Machine" , correct:false},
            {text:"Automated Tailor Mechanism" , correct:false},
            {text:"Automated Telling Machine" , correct:false},
        ]
    }
]

const quizQyestion = document.querySelector("#question")
const answerbuttons = document.querySelector("#answerbutton")
const nextbtn = document.querySelector("#next")
const questionElement = document.querySelector("#question")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextbtn.style.display = "none"
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild)
    }
}



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("Correct")
        score++;
    }
    else
    {
        selectedBtn.classList.add("Incorrect")
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if (button.dataset.correct === "true") {
            button.classList.add("Correct")
        }
        button.disabled = true;
    })
    nextbtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}`
    nextbtn.innerHTML = "Play Again"
    nextbtn.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }
    else{
        showScore();
    }
}

nextbtn.addEventListener("click" , ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();

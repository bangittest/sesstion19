const questions = [
    {
        question: "What is the largest mammal on Earth?",
        answer: "Blue whale"
    },
    {
        question: "What is the national bird of the United States?",
        answer: "Bald eagle"
    },
    {
        question: "How many legs does a spider have?",
        answer: "Eight"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function updateProgressBar() {
    const progressBarFill = document.getElementById("progress-bar-fill");
    progressBarFill.style.width = "100%";

    setTimeout(function () {
        progressBarFill.style.width = "0%";
        nextQuestion();
    }, 6000);
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        updateProgressBar();
    } else {
        showResult();
    }
}

function showResult() {
    alert(`Correct answers: ${correctAnswers}\nWrong answers: ${wrongAnswers}`);
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        correctAnswers++;
        document.getElementById("track-bar-fill").style.backgroundColor = "green";
    } else {
        wrongAnswers++;
        document.getElementById("track-bar-fill").style.backgroundColor = "red";
    }
}

displayQuestion();
updateProgressBar();
const quizData = [
  {
    question: "What does HTML stand for?",
    a: "HyperText Make-Up Loop",
    b: "How To Make Lumpia",
    c: "HyperText Markup Languange",
    d: "Hyper-Tent Mac and Lasagna",
    correct: "c",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "Declaration represents the document type, and helps browsers to display web?",
    a: "<!DOCTYPE>",
    b: "<!DOCTYPE html>",
    c: "<!DOCTYPE lang>",
    d: "<!DOCTYPE header>",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    
  question: "Which character is used to indicate an end tag?",
    a: "*",
    b: "<>",
    c: "/",
    d: "none of the above",
    correct: "c",
  },
  
    {
    
  question: "Which Formatting elements were designed to display to emphasized text",
    a: "<em>",
    b: "<mark>",
    c: "<sup>",
    d: "<b>",
    correct: "a",
    },
    
    {
      question: "Why is the purpose of CSS?",
      a: "to define styles for your web pages",
      b: "to make it run",
      c: "to show it to everyone",
      d: "make aesthetic",
      correct: "a",
    }
  
];



const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");



let currentQuiz = 0;
let score = 0;


const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};




const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};



loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Click here to Play Again</button>
        ` 
    }
  }
});


const quizData = [
  {
    question: "How old is Gandalf ?",
    a: " 990",
    b: " 279",
    c: " 2000",
    d: " 24000",
    correct: "c",
  },
  {
    question: "What is the most used prgramming language?(2019) ?",
    a: " Java",
    b: " C",
    c: " Python",
    d: " JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of the unites states?(2022) ?",
    a: " Obi-Wan Kenobi",
    b: " Will Smith",
    c: " Biden",
    d: " Dracula",
    correct: "c",
  },
  {
    question: "What does HTML stand for",
    a: " Hi There Much Love",
    b: " Cascadign Style sheet",
    c: " Hypertext Markup Language",
    d: " Helicopters Terminals Motorboats Lamborginis",
    correct: "c",
  },
  {
    question: "What year was JavaScript lanched ?",
    a: " 2020",
    b: " 1970",
    c: " 1990",
    d: " 1995",
    correct: "1995",
  },
];

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  console.log(currentQuizData);
  console.log(currentQuizData.question);

  console.log(a_text);
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("You have finished.");
  }

  loadQuiz();
});

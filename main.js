// Objectives
// Each card should have a question about ES6 and a corresponding card for the answer to that question
// Have the ability to show an answer to a card
// Have the ability to add a card
// Have the ability to edit a card
// Have the ability to delete a card


// variables for HTML elemnts to pass Q/A's into
const questionText = document.getElementById("questionText")
const answerText = document.getElementById("answerText")
// HTML to use for click functionality
const newQuestion = document.getElementById("newQuestion")
const viewAnswer = document.getElementById("viewAnswer")

// defining questions and answers in quiz format
// starting without possible answers functions, then add possible answers when other stuff is working
let myQuestions = [
  {
    question: "What is ES6?",
    answers: {
      a: "A type of energy drink",
      b: "A planet, discovered in 1989",
      c: "A newer edition of Javascrip"
    },
    correctAnswer: "A new version of Javascript"
  },
  {
    question: "Why would you want to use ES6?",
    answers: {
      a: "Because it's easier to spell",
      b: "You wouldn't, Javascript is better",
      c: "Because ES6 is easier"
    },
    correctAnswer: "Because ES6 is easier"
  },
  {
    question: "Who is the greatest of all time?",
    answers: {
      a: "Trevor Watson",
      b: "Bob Marley",
      c: "Michael Jordan",
      d: "False, no one is the greatest of all time"
    },
    correctAnswer: "No one is the greatest of all time"
  }
];


newQuestion.addEventListener("click", () => {
  // grab a random index from within myQuestions object
  const keys = Object.keys(myQuestions);
  const randomIndex = keys[Math.floor(Math.random() * keys.length)];
  const item = myQuestions[randomIndex];
  // print question using index from "item"
  questionText.innerHTML = item.question
  // print answer to card when button is clicked
  viewAnswer.addEventListener("click", ()  => {
    answerText.innerHTML = item.correctAnswer
  })
})



// bonus objectives
// Use jQuery to make your site more interactive.
// Use a grid (skeleton, materialize, bootstrap)
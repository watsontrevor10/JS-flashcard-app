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
const nextQuestion = document.getElementById("nextQuestion")
const viewAnswer = document.getElementById("viewAnswer")

// defining questions and answers
let myQuestions = [
  {
    question: "What is ES6?",
    correctAnswer: "A newer version of Javascript"
  },
  {
    question: "Why would you want to use ES6?",
    correctAnswer: "Because ES6 is easier"
  },
  {
    question: "Who is the greatest of all time?",
    correctAnswer: "No one is the greatest of all time"
  }
];


nextQuestion.addEventListener("click", () => {
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

// prompt to add new question/answer to array
function newQuestion() {
  let addQuestion = prompt("Add Question", "default question")
  let addAnswer = prompt("Add Answer", "default answer")

  if (addQuestion != null && addAnswer != null) {
    myQuestions.push({
      'question': addQuestion,
      'correctAnswer': addAnswer
  })
  }
}

// prompt to edit current question and answer
function adjustQuestion() {
  let editQuestion = prompt(questionText.innerHTML, questionText.innerHTML)
  let editAnswer = prompt(answerText.innerHTML, answerText.innerHTML)
  
  // edit myQuestions array with user input
  if (editQuestion !== questionText.innerHTML) {
    myQuestions.find(v => v.question == questionText.innerHTML).question = editQuestion;
  } else {
    return
  }
  if (editAnswer !== answerText.innerHTML) {
    myQuestions.find(v => v.correctAnswer == answerText.innerHTML).correctAnswer = editAnswer;
  } else {
    return
  }

}



// bonus objectives
// Use jQuery to make your site more interactive.
// Use a grid (skeleton, materialize, bootstrap)
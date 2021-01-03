import {askQuestion, answerQuestion} from './quiz.js';

let state = '';
let currentQuestion = undefined;

window.handleChange = (evt) => {
  state = evt.target.value;
};

window.onSubmit = (evt) => {
  evt.preventDefault();
  if (state.length > 0) {
    console.log(currentQuestion);
    history.pushState(null, 'result', '/result');
    onRouteChange();
  }
};

const landing = () => {
  return `<a href="/quiz">Quiz</a>`;
};

const quiz = (question) => {
  return (
    `<form class="question" onsubmit="onSubmit(event)">
        <label>${question.question}</label>
        <div class="answers">        
          <div class="answerContainer">
            <input type="radio" id="answer1" value="a" name="answer" onclick="handleChange(event)"/>
            <label for="answer1">${question.a}</label>
          </div>
          <div class="answerContainer">
            <input type="radio" id="answer2" value="b" name="answer" onclick="handleChange(event)"/>
            <label for="answer2">${question.b}</label>
          </div>
          <div class="answerContainer">
            <input type="radio" id="answer3" value="c" name="answer" onclick="handleChange(event)"/>
            <label for="answer3">${question.c}</label>
          </div>
          <div class="answerContainer">
            <input type="radio" id="answer4" value="d" name="answer" onclick="handleChange(event)"/>
            <label for="answer4">${question.d}</label>
          </div>
        </div>
        <div>
          <input type="submit" value="Lösung einchecken"/>
        </div>
    </form>`
  );
};

const result = (result) => {
  const resultDiv = result ? `<div>Your answer is correct!</div>` : `<div>Your answer is wrong!</div>`;

  return resultDiv + `<a href="/quiz">Back to the Quiz</a>`;
};

const onRouteChange = async () => {
  const pathname = new URL(window.location).pathname;
  const domElement = document.querySelector('#content');

  if (pathname === '/quiz') {
    currentQuestion = await askQuestion();
    domElement.innerHTML = quiz(currentQuestion);
  } else if (pathname === '/result' && currentQuestion !== undefined && state.length > 0) {
    const res = await answerQuestion(currentQuestion, state);
    domElement.innerHTML = result(res);
  } else {
    domElement.innerHTML = landing();
  }
};

Array.from(document.querySelectorAll('a')).forEach((link) => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    history.pushState(null, 'Quiz', evt.target.href);
    onRouteChange();
  });
});

onRouteChange();

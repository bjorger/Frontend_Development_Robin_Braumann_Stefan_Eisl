import {askQuestion, answerQuestion} from './quiz.js';

let state = {
  currentQuestion: undefined,
  answer: ''
};

window.handleChange = (evt) => {
  state.answer = evt.target.value;
};

window.onSubmit = (evt) => {
  evt.preventDefault();
  history.pushState(null, 'result', '/result');
  onRouteChange();
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
    try{
      state.currentQuestion = await askQuestion();
      domElement.innerHTML = quiz(state.currentQuestion);
    }
    catch(e){
      console.error(e)
    }
  } else if (pathname === '/result' && state.currentQuestion !== undefined && state.answer.length > 0) {
    try{
      const res = await answerQuestion(state.currentQuestion, state.answer);
      domElement.innerHTML = result(res);
    }
    catch(e){
      console.error(e)
    }
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

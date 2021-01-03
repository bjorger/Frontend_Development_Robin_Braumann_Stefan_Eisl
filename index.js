import {askQuestion, answerQuestion} from './quiz.js';

const state = {
  currentQuestion: undefined,
  answer: '',
};

window.handleChange = (event) => {
  state.answer = event.target.value;
};

window.handleClick = (event) => {
  event.preventDefault();
  history.pushState(null, 'Quiz', event.target.href);
  onRouteChange();
}

window.handleSubmit = (evt) => {
  evt.preventDefault();
  history.pushState(null, 'result', '/result');
  onRouteChange();
};

const link = (url, urlText) => {
  return (`<a onclick="handleClick(event)" href="${url}">${urlText}</a>`)
}

const quiz = (question) => {
  return (`<form class="question" onsubmit="handleSubmit(event)">
        <label>${question.question}</label>
        <div class="answers">
          ${Object.keys(question.answers).map((key) => {
              return (`<div class="answerContainer">
                      <input type="radio" id=${'answer' + key} value="${key}" name="answer" onclick="handleChange(event)"/>
                      <label for=${'answer' + key}>${question.answers[key]}</label>
                    </div>`);
            }).toString().replaceAll(',', '')}
        </div>
        <div>
          <input type="submit" value="Lösung einchecken"/>
        </div>
    </form>`);
};

const result = (result) => {
  const resultDiv = result ? `<div>Your answer is correct!</div>` : `<div>Your answer is wrong!</div>`;

  return resultDiv + link('/quiz', 'Back to the Quiz');
};

const onRouteChange = async () => {
  const pathname = new URL(window.location).pathname;
  const domElement = document.querySelector('#content');

  if (pathname === '/quiz') {
    try {
      state.currentQuestion = await askQuestion();
      domElement.innerHTML = quiz(state.currentQuestion);
    } catch (e) {
      console.error(e);
    }
  } else if (pathname === '/result' && state.currentQuestion !== undefined && state.answer.length > 0) {
    try {
      const res = await answerQuestion(state.currentQuestion, state.answer);
      domElement.innerHTML = result(res);
    } catch (e) {
      console.error(e);
    }
  } else {
    domElement.innerHTML = link('/quiz', 'Quiz');
  }
};

onRouteChange();
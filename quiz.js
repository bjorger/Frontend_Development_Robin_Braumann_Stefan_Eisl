import {questions} from './question.js'

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export function askQuestion(){
    const question = questions[getRandomInt(questions.length)]
    return {
        question: question.question,
        a: question.a,
        b: question.b,
        c: question.c,
        d: question.d,
        id: question.id
    }
}

export function answerQuestion(user_question, answer){
    return answer === questions[user_question.id].correctAnswer;
}

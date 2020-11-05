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
        d: question.d
    }
}

export function answerQuestion(user_question, answer){
    console.log(`${user_question.question} ${answer}`)
    for(const question of questions) {
        if (question.question === user_question.question){
            return answer === question.correctAnswer;
        }
    }
}

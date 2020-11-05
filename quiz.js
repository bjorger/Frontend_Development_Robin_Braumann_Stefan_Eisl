import {questions} from './question.js'

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export function askQuestion(){
    let question = questions[getRandomInt(questions.length)]
    delete question.correctAnswer
    return question
}

export function answerQuestion(user_question, answer){
    questions.forEach(question => {
        if (question.question === user_question){
            return answer === question.correctAnswer;
        } 
    })
}

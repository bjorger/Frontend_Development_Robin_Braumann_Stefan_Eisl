import {askQuestion, answerQuestion} from './quiz.js'

const question = askQuestion()

console.log(question)

const answer = answerQuestion(question, 'b')
console.log(answer ? 'correct' : 'incorrect')

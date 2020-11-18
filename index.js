import {askQuestion, answerQuestion} from './quiz.js'

const question = askQuestion()
    .then(question => answerQuestion(question, 'b')
        .then(answer => console.log(answer ? 'correct' : 'incorrect'))
    );

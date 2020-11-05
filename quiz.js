import { questions } from './question.js';

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export function askQuestion() {
    // Make deep copy of questions, so you can manipulate the properties
    const questions_copy = JSON.parse(JSON.stringify(questions))
    var question = questions_copy[getRandomInt(questions.length)];
    delete question.correctAnswer
	return question;
}

export function answerQuestion(user_question, answer) {
    console.log(answer)
    console.log(questions[user_question.id].correctAnswer)
    console.log(questions[user_question.id])
	if (answer === questions[user_question.id].correctAnswer) {
		return true;
	} else {
		return false;
	}
}

/** Solution without a Question ID
 export function answerQuestion(user_question, answer){
    questions.forEach(question => {
        if (question.question === user_question){
            if(answer === question.correctAnswer){
                return true
            }
            else {
                return false
            }
        } 
    })
}
 * 
 */

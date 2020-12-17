import { askQuestion, answerQuestion } from './quiz.js';

askQuestion()
	.then((question) => {
		console.log(question);
		return question;
	})
	.then((question) => answerQuestion(question, 'b'))
	.then((answer) => console.log(answer ? 'correct' : 'incorrect'));

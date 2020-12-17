import {getQuestions} from './question.js';

/**
 * @return {Promise}
 * */
export async function askQuestion() {
  const question = await getQuestions();
  return {
    question: question.question,
    a: question.a,
    b: question.b,
    c: question.c,
    d: question.d,
    id: question.id,
  };
}

/**
 * @param {String} userQuestion
 * @param {String} answer
 * @return {Promise}
 * */
export async function answerQuestion(userQuestion, answer) {
  const q = await getQuestions({id: userQuestion.id});
  return q.correctAnswer === answer;
}

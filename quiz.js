import {getQuestions} from './question.js'


export async function askQuestion(){
    const question = await getQuestions();
    return {
        question: question.question,
        a: question.a,
        b: question.b,
        c: question.c,
        d: question.d,
        id: question.id
    }
}

export async function answerQuestion(user_question, answer) {
    const q = await getQuestions({id: user_question.id});
    return q.correctAnswer === answer;
}

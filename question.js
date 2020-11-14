import {delay} from './delay.js'

const questions = [
    {
        id: 0,
        question: 'Whats the best video game ever made?',
        correctAnswer: 'a',
        a: 'World of Warcraft Pre BFA',
        b: 'World of Warcraft Battle of Azeroth',
        c: 'Binding of Isaac',
        d: 'Super Mario Maker 2',
    },
    {
        id: 1,
        question: 'Whats 2 + 2?',
        correctAnswer: 'a',
        a: '5',
        b: '7',
        c: '4',
        d: '8',
    },
    {
        id: 2,
        question: 'Whats the capital of austria?',
        correctAnswer: 'b',
        a: 'Paris',
        b: 'Vienna',
        c: 'Halmstad',
        d: 'Salzburg',
    },
    {
        id: 3,
        question: 'Whats the plural of regex?',
        correctAnswer: 'c',
        a: 'Regulars Expression',
        b: 'Regexes',
        c: 'Regular Expressions',
        d: 'Regrets',
    },
];

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export async function getQuestions(options = {id: "random"}) {
    let id;
    if (options.id === "random") {
        id = getRandomInt(questions.length);
    } else {
        id = parseInt(options.id);
    }
    return await Promise.resolve(delay()).then(() => questions[id]);
}

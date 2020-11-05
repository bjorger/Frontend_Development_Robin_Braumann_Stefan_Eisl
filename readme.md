# FHS-Modules exercise

This is the starter package for FHS students to learn about ES6 modules.

## Requirements

- node
- npm

## Usage

- `git clone git@github.com:webpapaya/fhs-modules.git`
- `npm run start`

## Assignment

- We'll be building a quiz application
- This assignment includes the game logic only (no ui)
- define and export a list of questions from `questions.js`
  - a question looks like this: `{ question: 'some question', correctAnswer: 'a', a: 'answer', b: '', c: '', d: ''  }`
- implement a function `askQuestion()` in `quiz.js`
  - this function returns a random question (without the correctAnswer property)
- implement a function `answerQuestion(question, answer)` in `quiz.js`
  - this function returns true or false depending on the given answer
- example usage:

```js
// index.js
import { askQuestion, answerQuestion } from './quiz.js'

const question = askQuestion()
console.log(question)

/**
 * {
 *   question: 'Whats the best university?',
 *   a: 'Hagenberg',
 *   b: 'FHS',
 *   c: 'TU',
 *   d: 'JKU'
 * }
 */

const answer = answerQuestion(question, 'a')
console.log(answer ? 'correct' : 'incorrect')
```

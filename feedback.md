# Feedback: 4/5

- it's nice that you made the delay configurable
- in a promise chain, promises will be flattened automatically -0,5 (see code)
- unnecessary Promise resolve and then chaining -0,5 (see code)

```js
const question = askQuestion()
    .then(question => {
        console.log(question);
        return question;})
    .then(question => answerQuestion(question, 'b')
        .then(answer => console.log(answer ? 'correct' : 'incorrect'))
    //  ^^^^^^^^
    // you could flatten the result here so its not nested
    );

const question = askQuestion()
    .then(question => {
      console.log(question)
      return question
    })
    .then(question => answerQuestion(question, 'b'))
    .then(answer => console.log(answer ? 'correct' : 'incorrect'));
```

```js
export async function getQuestions(options = {id: "random"}) {
    let id;
    if (options.id === "random") {
        id = getRandomInt(questions.length);
    } else {
        id = parseInt(options.id);
    }
    return await Promise.resolve(delay()).then(() => questions[id]);
    //     ^^^^^^^^^^^^^^^^^^^^^^
    // you don't need to combine promises with async await
    // delay() already returns a promise so the code above could be simplified
}

export async function getQuestions(options = {id: "random"}) {
    let id;
    if (options.id === "random") {
        id = getRandomInt(questions.length);
    } else {
        id = parseInt(options.id);
    }
    await delay();
    // JS execution waits until delay is over

    return questions[id];
    // then return the question
}
```
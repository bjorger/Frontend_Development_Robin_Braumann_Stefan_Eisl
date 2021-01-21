# Feedback: 5/5

- Quiz works as expected
- You could have used templates as described in the lecture as it would have simplified your code a lot eg.:

```js
const answerQuestion = (question, answer) => {
  // ...
}

const questionTemplate = (question) => {
  const template = html(`
    <div>
      <button id="a" disabled="">${question.a}</button>
      <button id="c" disabled="">${question.b}</button>
      <button id="d" class="false" disabled="">${question.c}</button>
      <button id="b" disabled="">${question.d}</button>
    </div>
  `)

  template.querySelectorAll('button').forEach((domElement) => {
    domElement.addEventListener('click', (evt) => {
      answerQuestion(question, evt.attributes.id)
    })
  })

  return template;
}
```

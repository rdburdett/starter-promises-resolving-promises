const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will the weather be nice today?"

const promise = welcome();

promise.then((fortune) => {
  console.log(`Your question is: \n${question}`)
  console.log(`Answer: \n${fortune}`)
  return fortune
})
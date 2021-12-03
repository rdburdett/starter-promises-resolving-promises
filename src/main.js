const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

// welcome("Rob").then((fortune) => {
//   console.log(`Your question is: \n${question}`)
//   console.log(`Answer: \n${fortune}`)
//   return fortune
// })

// const question = "Will the weather be nice today?";
// const tellPromise = tell(question);
// tellPromise.then((fortune) => {
//   console.log(question);
//   console.log(fortune);
// });

// const tellPromise = tell()
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Failure:", error);
//   });

// setTimeout(() => console.log(tellPromise), 500);

welcome()
  .then(console.log) // Logs the result of welcome()
  .then(goodbye) // Returns promise from goodbye()
  .then(console.log) // Logs the result of goodbye()
  .catch(console.error); // Logs error from welcome() or goodbye()
  
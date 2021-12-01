const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will the weather be nice today?"

const promise = welcome();

console.log(promise);

const prompt = require('prompt-sync')()

function flipCoin() {
  const randomNumber = Math.random();
  const result = (randomNumber < 0.5) ?  "Heads" : "Tails";
  return result;
}


function displayResult(result){
  console.log(`Result: ${result}`);
}


function flipCoinAndDisplayResult() {
  const flipResult=  flipCoin();
  displayResult(flipResult);
}


flipCoinAndDisplayResult();



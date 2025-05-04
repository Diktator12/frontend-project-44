#!/usr/bin/env node
import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = greeting();

console.log('What is the result of the expression?');

const generateRandomNumber = () => Math.floor(Math.random() * 100);
const opIndex = () => Math.floor(Math.random() * 3);

const operations = ['+', '-', '*'];

const playRound = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const roundIndex = opIndex();
  const selectedOperation = operations[roundIndex];

  const question = `${number1} ${selectedOperation} ${number2}`;

  const correctAnswer = () => {
    let result;
    if (selectedOperation === '+') {
      result = number1 + number2;
    } else if (selectedOperation === '-') {
      result = number1 - number2;
    } else {
      result = number1 * number2;
    }
    return result.toString();
  };

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer()) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.`);
  console.log(`Let's try again, ${name}`);
  return false;
};

const playGame = () => {
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const isRoundSuccessful = playRound();
    if (!isRoundSuccessful) {
      return false;
    }
  }
  return true;
};

if (playGame()) {
  console.log(`Congratulations, ${name}!`);
}

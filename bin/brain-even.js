#!/usr/bin/env node
import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const generateRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => number % 2 === 0;
// const correctAnswer = isEven ? 'yes' : 'no';

const playRound = () => {
  const number = generateRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
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

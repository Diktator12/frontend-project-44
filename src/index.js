import readlineSync from 'readline-sync';
import greeting from './cli.js';

const runGame = (description, generateRound) => {
  const name = greeting();

  console.log(description);

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;

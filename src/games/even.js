import runGame from '../index.js';

const brainEven = () => {
  const desc = 'Answer "yes" if the number is even, otherwise answer "no"';

  const generateRandomNumber = () => Math.floor(Math.random() * 100);
  const isEven = (num) => num % 2 === 0;

  const playRound = () => {
    const number = generateRandomNumber();

    const question = number;

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    return { question, correctAnswer };
  };

  runGame(desc, playRound);
};

export default brainEven;

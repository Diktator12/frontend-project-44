import runGame from '../index.js'

const brainPrime = () => {
  const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".'

  const generateRandomNumber = () => Math.floor(Math.random() * 100)

  const playRound = () => {
    const number = generateRandomNumber()

    const question = `${number}`

    const calculateAnswer = () => {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) return 'no'
      }
      return 'yes'
    }

    const correctAnswer = calculateAnswer()

    return { question, correctAnswer }
  }

  runGame(desc, playRound)
}

export default brainPrime

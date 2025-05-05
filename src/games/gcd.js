import runGame from '../index.js'

const brainGcd = () => {
  const desc = 'Find the greatest common divisor of given numbers.'

  const generateRandomNumber = () => {
    let number

    do {
      number = Math.floor(Math.random() * 100)
    } while (number % 2 === 1)

    return number
  }

  const playRound = () => {
    const number1 = generateRandomNumber()
    const number2 = generateRandomNumber()

    const question = `${number1} ${number2}`

    const calculateAnswer = () => {
      let a = number1
      let b = number2

      while (b !== 0) {
        let temp = b
        b = a % b
        a = temp
      }

      return a.toString()
    }

    const correctAnswer = calculateAnswer()

    return { question, correctAnswer }
  }

  runGame(desc, playRound)
}

export default brainGcd

import runGame from '../index.js'

const brainCalc = () => {
  const desc = 'What is the result of the expression?'

  const generateRandomNumber = () => Math.floor(Math.random() * 100)
  const opIndex = () => Math.floor(Math.random() * 3)

  const operations = ['+', '-', '*']

  const playRound = () => {
    const number1 = generateRandomNumber()
    const number2 = generateRandomNumber()
    const roundIndex = opIndex()
    const selectedOperation = operations[roundIndex]

    const question = `${number1} ${selectedOperation} ${number2}`

    const calculateAnswer = () => {
      let result
      if (selectedOperation === '+') {
        result = number1 + number2
      } else if (selectedOperation === '-') {
        result = number1 - number2
      } else {
        result = number1 * number2
      }
      return result.toString()
    }

    const correctAnswer = calculateAnswer()

    return { question, correctAnswer }
  }

  runGame(desc, playRound)
}

export default brainCalc

import runGame from '../index.js'

const brainProgression = () => {
  const desc = 'What number is missing in the progression?'

  const generateInitialNumber = () => Math.floor(Math.random() * 20)
  const generateRandomIncrement = () => Math.floor(Math.random() * 5) + 1

  const playRound = () => {
    let initialNumber = generateInitialNumber()
    const randomIncrement = generateRandomIncrement()

    let progression = []

    for (let i = 0; i <= 10; i += 1) {
      progression.push(initialNumber)
      initialNumber += randomIncrement
    }

    const cutOutElemIndex = Math.floor(Math.random() * progression.length)
    const cutOutElem = progression[cutOutElemIndex]
    progression[cutOutElemIndex] = '..'

    const question = progression.join(' ')

    const correctAnswer = cutOutElem.toString()

    return { question, correctAnswer }
  }

  runGame(desc, playRound)
}

export default brainProgression

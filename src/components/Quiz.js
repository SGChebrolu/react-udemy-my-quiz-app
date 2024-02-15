import Question from './Question'

const Quiz = () => {
  let questionIndex = 0
  const testClick = () => {
    console.log('testClick')
    questionIndex++
  }

  return (
    <div className='quiz'>
      <div className='score'>Question 1/8</div>
      <Question />
      <div className='next-button' onClick={testClick}>
        Next Question #{questionIndex}
      </div>
    </div>
  )
}

export default Quiz

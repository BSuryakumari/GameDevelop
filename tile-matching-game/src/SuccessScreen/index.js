
import React from 'react'
import './styles.css'

const SuccessScreen = ({score, time}) => {
  return (
    <div className="container">
      <div className="success-container">
        <h2>Congratulations!</h2>
        <p>Your Score: {score}</p>
        <p>Time Taken: {time} seconds</p>
      </div>
    </div>
  )
}

export default SuccessScreen

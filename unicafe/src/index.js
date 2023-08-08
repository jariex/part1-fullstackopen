import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Display = ({text, value}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
  
}


const Button = ({text, handleClick}) => {

  return (
    <button onClick={handleClick} className="btn">
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <Display text={text} value={value}/>

  )
}

const Statistics = ({good, bad, neutral}) => {

  if(good + bad + neutral === 0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
      

    )
  }

  return (
    <div>
      <h1>Statistics</h1>
     <table>
      <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={good + neutral + bad}/>  
          <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)}/>
          <StatisticLine text="positive" value={`${(good) / (good + neutral + bad) * 100} %`}/>
        </tbody>
     </table>
      
  </div>

  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)
  

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)


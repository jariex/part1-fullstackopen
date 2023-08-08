import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const DisplayMostVoted = ({anecdotes, votes}) => {

  const mostVoted = Math.max(...votes)
  const index = votes.indexOf(mostVoted)
  const winner = anecdotes[index]
      
    if (mostVoted === 0) {
      return (
          <p>No votes yet</p>
        )
      }
    
    return (
      <div>
        <p>{winner}</p>
        <p>has {mostVoted} votes</p>
      </div>
    )
     
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))
  const handleClickRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const handleClickVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

  }

  return (
    <>
    <Header text={'Anecdote of the day'} />
    <div>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
    </div>
    <Button handleClick={handleClickVotes} text='vote' />
    <Button handleClick={handleClickRandom} text='Next anecdote' />
    <Header text={'Anecdote with most votes'} />
    <DisplayMostVoted anecdotes={anecdotes} votes={votes} />
    </>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

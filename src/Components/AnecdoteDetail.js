const AnecdoteDetail = ({ anecdote }) => {
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>has {anecdote.votes} votes</p>
      <p>for more info see {anecdote.url}</p>
    </div>
  )
}

export default AnecdoteDetail
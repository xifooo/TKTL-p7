import { useNavigate } from "react-router-dom"

const AnecdoteList = ({ anecdotes }) => {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`/anecdotes/${id}`)
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote =>
          <li key={anecdote.id} onClick={() => handleClick(anecdote.id)} >
              {anecdote.content}
          </li>)
        }
      </ul>
    </div>)
}



export default AnecdoteList
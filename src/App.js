import { useState } from 'react'

import {
  Route,
  Routes,
  useNavigate,
  useMatch
} from "react-router-dom"

import About from './Components/About'
import AnecdoteDetail from './Components/AnecdoteDetail'
import AnecdoteList from './Components/AnecdoteList'
import CreateNew from './Components/AnecdoteForm'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import Notification from './Components/Notification'


const App = () => {
  const [notification, setNotification] = useState('')

  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const sendToNotification = (msg) => {
    setNotification(msg)
    return () => {
      setTimeout(() => {
        setNotification("")
      }, 5000)
    }
  }
  const navigate = useNavigate()
  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    sendToNotification(`a new anecdote: ${anecdote.content} created!`)
    setAnecdotes(anecdotes.concat(anecdote))
    navigate("/anecdotes")
  }

  const match = useMatch("/anecdotes/:id")

  const anecdote = match
    ? anecdotes.find(item => item.id === Number(match.params.id))
    : null

  return (
    <div>
      <div>
        <h1>Software anecdotes</h1>
        <Menu />
        <Notification notification={notification} />
      </div>

      <Routes>
        <Route path='/anecdotes/:id' element={<AnecdoteDetail anecdote={anecdote} />} />
        <Route path='/anecdotes' element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path='/create' element={<CreateNew addNew={addNew} />} />
        <Route path='/' element={<About />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App

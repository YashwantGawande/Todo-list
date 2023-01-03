import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodos] = useState('')

  function handleSubimt(event){
    event.preventDefault()
    setTodos([...todos,newTodo])
    setNewTodos('')
  }

  function handleChange(event){
    setNewTodos(event.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubimt}>
        <input value={newTodo} onChange={handleChange} />
        <button>Add todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button></button>
    </div>
  )
}

export default App

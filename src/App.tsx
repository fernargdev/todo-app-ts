import { useState } from 'react'
import Todos from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Aprender JavaScript',
    completed: true,
  },
  {
    id: '2',
    title: 'Aprender React',
    completed: true,
  },
  {
    id: '3',
    title: 'Aprender TypeScript',
    completed: false,
  },
  {
    id: '4',
    title: 'Aprender React con TypeScript',
    completed: false,
  },
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  )
}

export default App

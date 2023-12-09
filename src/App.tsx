import { useState } from 'react'
import Todos from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: true,
  },
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  return <Todos todos={todos} />
}

export default App

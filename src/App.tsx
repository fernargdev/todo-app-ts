import { useState } from 'react'
import Todos from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

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

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const onToggleCompleteTodo = ({
    id,
    completed,
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={onToggleCompleteTodo}
        todos={todos}
      />
    </div>
  )
}

export default App

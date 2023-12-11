import { useState } from 'react'
import Todos from './components/Todos'
import { FilterValue, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './consts'
import Footer from './components/Footer'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const activeCount = todos.filter((todos) => !todos.completed).length
  const completeCount = todos.length - activeCount

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
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

  const handleFilterChange = (filter: FilterValue): void => {
    // console.log(filter)
    setFilterSelected(filter)
  }

  const filteredTodo = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }
    return true
  })

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onCompleted={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodo}
      />
      <Footer
        activeCount={activeCount}
        completeCount={completeCount}
        onClearCompleted={handleClearCompleted}
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App

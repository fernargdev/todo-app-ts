import { type ListOfTodos } from '../types'
import Todo from './Todo'

interface Props {
  todos: ListOfTodos
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
          />
        </li>
      ))}
    </ul>
  )
}

export default Todos

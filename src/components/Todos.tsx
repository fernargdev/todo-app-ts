import { type ListOfTodos } from '../types'

interface Props {
  todos: ListOfTodos
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default Todos

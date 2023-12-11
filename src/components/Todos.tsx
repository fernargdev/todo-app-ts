import { type TodoId, type ListOfTodos, type Todo as TodoType } from '../types'

import Todo from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleted }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onCompleted={onCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}

export default Todos

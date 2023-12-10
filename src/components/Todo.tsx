import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, 'id' | 'completed'>) => void

  onRemoveTodo: ({ id }: TodoId) => void
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo,
}) => {
  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onToggleCompleteTodo({ id, completed: event.target.checked })
  }

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        id={id}
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}

export default Todo

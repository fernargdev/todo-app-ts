import { type Todo as TodoType } from '../types'

type Props = TodoType

const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        id={id}
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => {}}></button>
    </div>
  )
}

export default Todo

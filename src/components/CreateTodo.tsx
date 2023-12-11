import { TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  return (
    <>
      <h1>CreateTodo</h1>
    </>
  )
}

export default CreateTodo

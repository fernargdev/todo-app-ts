import { TodoTitle } from '../types'
import CreateTodo from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        Todo with TypeScript
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          alt="TypeScript Logo"
          style={{ height: 'auto', width: '60px' }}
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}

export default Header

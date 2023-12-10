import Filters from './Filters'

const Footer: React.FC<Props> = ({ activeCount, todos, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>
        Tareas Pendientes
      </span>

      <Filters filterSelect={} onFilterSelected={} onFilterChange={} />
    </footer>
  )
}

export default Footer

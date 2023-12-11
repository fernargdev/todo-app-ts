import { FilterValue } from '../types'
import Filters from './Filters'

interface Props {
  activeCount: number
  completeCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  onFilterChange: (filter: FilterValue) => void
}

const Footer: React.FC<Props> = ({
  activeCount = 0,
  completeCount = 0,
  filterSelected,
  onClearCompleted,
  onFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
        Tareas Pendientes
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={onFilterChange}
      />
    </footer>
  )
}

export default Footer

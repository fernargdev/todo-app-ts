import { FilterValue } from '../types'
import Filters from './Filters'

interface Props {
  activeCount: number
  completeCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

const Footer: React.FC<Props> = ({
  activeCount = 0,
  completeCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
        Tareas Pendientes
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  )
}

export default Footer

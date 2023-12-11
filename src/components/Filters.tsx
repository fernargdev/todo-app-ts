import { FILTERS_BUTTONS } from '../consts'
import { FilterValue } from '../types'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault()
                onFilterChange(key as FilterValue)
              }}
            />
            {literal}
          </li>
        )
      })}
    </ul>
  )
}

export default Filters

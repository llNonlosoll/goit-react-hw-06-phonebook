import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

// Фільтр контактів
export function Filter({ value, onFilterChange }) {
  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onFilterChange} />
      </FilterLabel>
    </FilterContainer>
  );
}

import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

// Фільтр контактів
export const Filter = ({ value, onFilterChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onFilterChange} />
      </FilterLabel>
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

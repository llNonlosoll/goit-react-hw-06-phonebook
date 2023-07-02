import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

// Фільтр контактів
export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter} onChange={handleFilterChange} />
      </FilterLabel>
    </FilterContainer>
  );
}

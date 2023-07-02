// Імпортуємо хуки useSelector, useDispatch
import { useSelector, useDispatch } from 'react-redux';
// Імпортуємо action
import { setFilter } from 'redux/filterSlice';
// Імпортуємо селектор
import { getFilter } from 'redux/selectors';
// Імпортуємо стилізовані компоненти
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

// Фільтр контактів
export function Filter() {
  // Отримуємо значення фільтру зі стану
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // Зміна значення фільтру
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

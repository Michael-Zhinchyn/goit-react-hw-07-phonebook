import { useDispatch, useSelector } from 'react-redux';
import {
  StyledFilterBlock,
  StyledFieldLabel,
  StyledField,
} from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleInputChange = e => {
    const contactToFind = e.target.value;
    dispatch(setFilter(contactToFind));
  };

  return (
    <StyledFilterBlock>
      <StyledFieldLabel htmlFor="filterInput">
        Find contacts by name
      </StyledFieldLabel>
      <StyledField
        id="filterInput"
        placeholder="Search..."
        value={filter}
        onChange={handleInputChange}
      />
    </StyledFilterBlock>
  );
};

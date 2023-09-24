import {
  StyledFilterBlock,
  StyledFieldLabel,
  StyledField,
} from './Filter.styled';

export const Filter = () => {
  return (
    <StyledFilterBlock>
      <StyledFieldLabel htmlFor="filterInput">
        Find contacts by name
      </StyledFieldLabel>
      <StyledField id="filterInput" placeholder="Search..." />
    </StyledFilterBlock>
  );
};

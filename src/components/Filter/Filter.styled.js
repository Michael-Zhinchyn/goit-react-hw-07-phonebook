import styled from 'styled-components';

export const StyledFilterBlock = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
`;

export const StyledFieldLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const StyledField = styled.input`
  background-color: #40414f;
  outline: none;
  color: white;
  border-radius: 8px;
  border: none;
  padding: 6px;

  &::placeholder {
    color: #8e8483;
  }
`;

import styled from 'styled-components';

export const StyledFilterBlock = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 600px;
    margin: auto;
  }
`;

export const StyledFieldLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const StyledField = styled.input`
  background-color: #40414f;
  outline: none;
  color: white;
  border-radius: 6px;
  border: none;
  padding: 6px;

  &::placeholder {
    color: #8e8483;
  }
`;

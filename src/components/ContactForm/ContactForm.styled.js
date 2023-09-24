import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { PatternFormat } from 'react-number-format';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
  border: 1px solid grey;
  margin-left: 40px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const StyledField = styled(Field)`
  background-color: #40414f;
  outline: none;
  color: white;
  border-radius: 8px;
  border: none;
  padding: 6px;
  width: 250px;
  &::placeholder {
    color: #8e8483;
  }
`;

export const StyledPatternFormat = styled(PatternFormat)`
  background-color: #40414f;
  outline: none;
  color: white;
  border-radius: 8px;
  border: none;
  padding: 6px;
  width: 250px;
  &::placeholder {
    color: #8e8483;
  }
`;

export const StyledFieldBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFieldLabel = styled.label`
  margin-bottom: 8px;
`;

export const ErrorText = styled(ErrorMessage)`
  color: #fd7058;
  margin-top: 6px;
  font-size: 14px;
`;

export const SubmitFromBtn = styled.button`
  width: 150px;
  height: 30px;
  color: #6b6c7b;
  background-color: rgba(5, 5, 5, 0.18);
  border: 1px solid grey;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
  &:hover {
    color: green;
    background-color: transparent;
  }
`;

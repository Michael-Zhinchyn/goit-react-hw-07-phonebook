import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { PatternFormat } from 'react-number-format';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  @media (min-width: 768px) {
    width: 600px;
    margin: auto;
    
  }
`;

export const StyledField = styled(Field)`
  background-color: #40414f;
  outline: none;
  color: white;
  border-radius: 6px;
  border: none;
  padding: 6px;
  &::placeholder {
    color: #8e8483;
  }
  @media (min-width: 768px) {
    width: 500px;
    margin: auto;
  }
`;

export const StyledPatternFormat = styled(PatternFormat)`
  background-color: #40414f;
  outline: none;
  color: white;
  border-radius: 6px;
  border: none;
  padding: 6px;

  &::placeholder {
    color: #8e8483;
  }
  @media (min-width: 768px) {
    width: 500px;
    margin: auto;
  }
`;

export const StyledFieldBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

export const StyledFieldLabel = styled.label`
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-left: 36px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: #fd7058;
  margin-top: 6px;
  font-size: 14px;
  text-align: end;
  margin-right: 20px;
  @media (min-width: 768px) {
    text-align: end;
    margin-right: 36px;
  }
`;

export const SubmitFromBtn = styled.button`
  width: 150px;
  height: 30px;
  color: white;
  margin: 16px;
  background-color: rgba(5, 5, 5, 0.18);
  border: 1px solid grey;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-top: 12px;
  &:hover {
    color: green;
    background-color: transparent;
  }

  @media (min-width: 768px) {
    margin: 12px auto 16px;
  }
`;

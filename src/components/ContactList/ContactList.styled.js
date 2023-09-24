import styled from 'styled-components';

export const StyledContactsBlock = styled.div`
  @media (min-width: 768px) {
    width: 600px;
    margin: 34px auto;
  }
`;

export const StyledContactList = styled.ul`

`;

export const StyledContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 500;
  list-style: none;
`;

export const StyledContactItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 360px;

  @media (min-width: 768px) {
    width: 360px;
  }
`;

export const StyledContactNumber = styled.span`
  
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: orange;
  cursor: pointer;

  &:hover {
    color: red;
  }

  &:focus {
    outline: none;
  }
`;

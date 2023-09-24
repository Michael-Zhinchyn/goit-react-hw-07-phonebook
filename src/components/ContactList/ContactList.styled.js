import styled from 'styled-components';

export const StyledContactsBlock = styled.div`
 
`;

export const StyledContactList = styled.ul``;

export const StyledContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  list-style: circle;
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

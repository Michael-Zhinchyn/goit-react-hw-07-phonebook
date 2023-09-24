import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContacts, getIsLoading, getIsError } from 'redux/selectors';
import { MdOutlineDeleteForever } from 'react-icons/md';
import {
  StyledContactList,
  StyledContactItem,
  StyledContactNumber,
  StyledContactsBlock,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const allContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getIsError);

  const displayedContact = allContacts;

  const contactToDelete = (e) => {
console.log(e.target);
  }
 

  return (
    <StyledContactsBlock>
      {isLoading && !error && <b>Loading...</b>}
      <StyledContactList>
        {displayedContact.map(item => {
          const { id, name, phone } = item;
           
          return (
            <StyledContactItem key={id}>
              <div>
                {name}:<StyledContactNumber>{phone}</StyledContactNumber>
              </div>
              <DeleteButton type="button" onClick={contactToDelete}>
                <MdOutlineDeleteForever size={25} />
              </DeleteButton>
            </StyledContactItem>
          );
        })}
      </StyledContactList>
    </StyledContactsBlock>
  );
};

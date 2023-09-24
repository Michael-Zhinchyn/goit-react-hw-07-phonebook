import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  selectIsLoading,
  selectIsError,
  selectDisplayedContacts,
} from 'redux/selectors';
import { MdOutlineDeleteForever } from 'react-icons/md';
import {
  StyledContactList,
  StyledContactItem,
  StyledContactNumber,
  StyledContactsBlock,
  StyledContactItemBlock,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const displayedContacts = useSelector(selectDisplayedContacts);

  return (
    <StyledContactsBlock>
      {isLoading && !error && <b>Loading...</b>}
      {error && <p>There was an error fetching contacts: {error}</p>}
      {!isLoading && !error && (
        <StyledContactList>
          {displayedContacts.length === 0 ? (
            <p>No contacts available.</p>
          ) : (
            displayedContacts.map(({ id, name, phone }) => (
              <StyledContactItem key={id}>
                <StyledContactItemBlock>
                  {name}:<StyledContactNumber>{phone}</StyledContactNumber>
                </StyledContactItemBlock>
                <DeleteButton
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <MdOutlineDeleteForever size={25} />
                </DeleteButton>
              </StyledContactItem>
            ))
          )}
        </StyledContactList>
      )}
    </StyledContactsBlock>
  );
};

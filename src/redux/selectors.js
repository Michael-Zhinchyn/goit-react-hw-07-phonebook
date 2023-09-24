export const selectContacts = state => state.contactData.contacts.items;
export const selectIsLoading = state => state.contactData.contacts.isLoading;
export const selectIsError = state => state.contactData.contacts.error;
export const selectFilter = state => state.contactData.filter;

export const selectDisplayedContacts = state => {
  const allContacts = selectContacts(state);
  const filter = selectFilter(state) || '';
  return allContacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

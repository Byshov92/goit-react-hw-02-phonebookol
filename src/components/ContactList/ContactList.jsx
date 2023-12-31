import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem contact={contact} onContactDelete={onContactDelete} />
      ))}
    </List>
  );
};

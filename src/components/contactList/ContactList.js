import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactList.module.css';
import ContactListItem from '../contactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

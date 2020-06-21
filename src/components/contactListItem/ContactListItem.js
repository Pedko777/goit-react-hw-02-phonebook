import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactListItem.module.css';

const ContactListItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemP}>
        name: {name} tel: {number}
      </p>
      <button
        className={styles.listItemButton}
        onClick={() => onDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;

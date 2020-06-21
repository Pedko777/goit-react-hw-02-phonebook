import React, { Component } from 'react';
import ConatctForm from './components/conactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import styles from './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    
      this.state.contacts.find(({ name }) => name === contact.name && contact.name)
        ? alert(`${contact.name} already exists`)
        : this.setState(prevState => {
            return {
              contacts: [...prevState.contacts, contact],
            };
          });
    };


  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ConatctForm onSubmit={this.addContact} />

        <h2 className={styles.sectionTitle}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        <ContactList
          onDeleteContact={this.deleteContact}
          contacts={this.getFilteredContacts()}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFilterChange = filter => this.setState({ filter: filter });

  findByName = () =>
    this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const findContacts = this.findByName();
    const listContacts =
      findContacts.length !== 0 ? findContacts : this.state.contacts;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          contactItems={this.state.contacts}
        />
        <Filter filter={this.state.filter} onChange={this.onFilterChange} />
        <h2>Contacts</h2>
        <ContactList contacts={listContacts} onDelete={this.deleteContact} />
      </>
    );
  }
}

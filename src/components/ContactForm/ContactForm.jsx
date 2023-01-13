import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  isUniqueName = (contactItems, name) =>
    contactItems.some(item => item.name === name);

  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!this.isUniqueName(this.props.contactItems, name)) {
      this.props.onSubmit({ id: nanoid(), name, number });
      this.reset();
    } else {
      Notify.warning(`${name} is already in contacts!`);
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

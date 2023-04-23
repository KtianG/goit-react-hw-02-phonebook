import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { ContactListElement } from 'components/ContactListElement/ContactListElement';

export class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  renderContactList = ({ id, name, number }) => {
    return <ContactListElement key={id} name={name} number={number} />;
  };

  render() {
    const { contacts } = this.props;
    return (
      <ul className={css.ContactList}>
        {contacts.map(this.renderContactList)}
      </ul>
    );
  }
}

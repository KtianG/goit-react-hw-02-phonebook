import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactListElement.module.css';

export class ContactListElement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

  render() {
    const { name, number } = this.props;

    return (
      <li className={css.listElement}>
        <span>{name}:</span> <span>{number}</span>
      </li>
    );
  }
}

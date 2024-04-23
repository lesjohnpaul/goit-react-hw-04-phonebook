import React, { Component } from 'react';
import css from './Filter.module.css'; // Make sure this path is correct
import PropTypes from 'prop-types';

export class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  };

  handleFilterChange = e => {
    this.props.setFilter(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <div className={css.divFilter}>
        <p>Find Contacts by Name</p>
        <input
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

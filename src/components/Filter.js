import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

class Filter extends React.Component {
  render() {
    const { handleSearch, searchInput } = this.props;
    return (
      <div className="filter-container">
        <h3>Todas as cartas</h3>
        <div className="style1">
          <label htmlFor="name-filter">
            Filtros de busca
            <input
              type="text"
              data-testid="name-filter"
              id="name-filter"
              name="name-filter"
              value={ searchInput }
              onChange={ handleSearch }
            />
          </label>
        </div>
        <button type="button">Buscar</button>
      </div>
    );
  }
}

Filter.propTypes = {
  handleSearch: PropTypes.func,
  searchInput: PropTypes.string,
}.isRequired;

export default Filter;

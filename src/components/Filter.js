import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { handleSearch, searchInput, searchSelect, searchTrunfo } = this.props;
    return (
      <div
        className="flex
        flex-col
        border shadow-md rounded-lg
        bg-cyan-900 mx-20 h-auto"
      >
        <div className="flex flex-row justify-around mr-8 my-8">
          <label
            htmlFor="name-filter"
            className="flex text-cyan-50 font-bold items-center"
          >
            Filtros de busca
            <input
              className="mt-0
              bg-slate-100
              ml-5
              block
              px-0.5
              border-2 border-gray-400
              focus:ring-0 focus:border-black"
              type="text"
              data-testid="name-filter"
              id="name-filter"
              name="searchInput"
              placeholder="Nome da carta"
              value={ searchInput }
              onChange={ handleSearch }
            />
          </label>
          <label htmlFor="rare-filter">
            <select
              className="block
                    bg-slate-100
                    w-48
                    mt-0
                    px-0.5
                    border-2 border-gray-400
                    focus:ring-0 focus:border-black"
              data-testid="rare-filter"
              id="rare-filter"
              name="searchSelect"
              placeholder="Raridade"
              value={ searchSelect }
              onChange={ handleSearch }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-filter" className="ml-2 inline-flex items-center">
            <input
              className="
                ml-2
                          border-gray-400 border-2
                          text-black
                          focus:border-gray-400 focus:ring-black
                        "
              type="checkbox"
              data-testid="trunfo-filter"
              id="trunfo-filter"
              name="searchTrunfo"
              checked={ searchTrunfo }
              onChange={ handleSearch }
            />
            <span
              className="flex text-cyan-50
              font-bold items-center ml-4"
            >
              Super Tryunfo
            </span>
          </label>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  handleSearch: PropTypes.func,
  searchInput: PropTypes.string,
  searchSelect: PropTypes.string,
  searchTrunfo: PropTypes.string,
}.isRequired;

export default Filter;

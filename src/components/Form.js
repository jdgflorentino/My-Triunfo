import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form className="sm ml-20 my-20" onSubmit={ this.handleSubmit }>
        <div className="flex justify-start">
          <h1 className="text-2xl text-amber-600 font-medium">Adicionar uma carta</h1>
        </div>
        <div className="mr-8 mt-8 max-w-md">
          <label htmlFor="name-input" className="block">
            <span className="text-gray-700"> Nome</span>
            <input
              className="mt-0
              bg-slate-100
              block
              w-3/4
              px-0.5
              border-0 border-b-2 border-gray-400
              focus:ring-0 focus:border-black"
              type="text"
              data-testid="name-input"
              id="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="mr-8 mt-8 max-w-md">
          <label htmlFor="description-input">
            <span className="text-gray-700"> Descrição</span>
            <textarea
              className="mt-0
              bg-slate-100
              block
              w-3/4
              px-0.5
              border-0 border-b-2 border-gray-400
              focus:ring-0 focus:border-black"
              data-testid="description-input"
              id="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="mr-8 mt-8 max-w-md">
          <label htmlFor="attr1-input" className="flex">
            <span className="text-gray-700"> Atributo 1</span>
            <input
              className="mt-0
              bg-slate-100
              ml-2
              block
              px-0.5
              border-0 border-b-2 border-gray-400
              focus:ring-0 focus:border-black"
              type="number"
              data-testid="attr1-input"
              id="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="mr-8 mt-8 max-w-md">

          <label htmlFor="attr2-input" className="flex">
            <span className="text-gray-700"> Atributo 2</span>
            <input
              className="mt-0
              bg-slate-100
              block
              ml-2
              px-0.5
              border-0 border-b-2 border-gray-400
              focus:ring-0 focus:border-black"
              type="number"
              data-testid="attr2-input"
              id="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="mr-8 mt-8 max-w-md">
          <label htmlFor="attr3-input" className="flex">
            <span className="text-gray-700"> Atributo 3</span>
            <input
              className="mt-0
              bg-slate-100
              block
              ml-2
              px-0.5
              border-0 border-b-2 border-gray-400
              focus:ring-0 focus:border-black"
              type="number"
              data-testid="attr3-input"
              id="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="mr-8 mt-8 max-w-md">
          <label htmlFor="image-input" className="flex">
            <span className="text-gray-700"> Imagem</span>
            <input
              className="mt-0
              bg-slate-100
              ml-2
              block
              px-0.5
              border-0 border-b-2 border-gray-400
              focus:ring-0 focus:border-black"
              type="text"
              data-testid="image-input"
              id="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="mr-8 mt-8 max-w-md">
          <label htmlFor="rare-input">
            <span className="text-gray-700"> Raridade</span>
            <select
              className="
                    block
                    bg-slate-100
                    w-3/4
                    mt-0
                    px-0.5
                    border-0 border-b-2 border-gray-400
                    focus:ring-0 focus:border-black
                  "
              data-testid="rare-input"
              id="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>
        <div className="mr-8 mt-8 max-w-md">
          {
            !hasTrunfo
            && (
              <label htmlFor="trunfo-input" className="inline-flex items-center">
                <input
                  className="
                          border-gray-400 border-2
                          text-black
                          focus:border-gray-400 focus:ring-black
                        "
                  type="checkbox"
                  data-testid="trunfo-input"
                  id="trunfo-input"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                <span className="text-gray-700 ml-4"> Super Triunfo</span>
              </label>)
          }
          {hasTrunfo && <p className="text-gray-700">
            Você já tem um Super Trunfo em seu baralho
          </p>}
        </div>
        <button
          className="font-general-medium flex justify-center items-center
          w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg
          border border-orange-200 py-2.5 sm:py-3 shadow-lg rounded-lg
          bg-orange-50 focus:ring-1 focus:ring-orange-900
          hover:bg-orange-500 text-gray-500 hover:text-white duration-500"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;

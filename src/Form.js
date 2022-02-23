import React from 'react';
import './form.css';

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Adicionar nova carta</h1>
        <div className="style1">
          <label htmlFor="name-input">
            Nome
            <input type="text" data-testid="name-input" id="name-input" />
          </label>
        </div>
        <div className="style1">
          <label htmlFor="description-input">
            Descrição
            <textarea data-testid="description-input" id="description-input" />
          </label>
        </div>
        <div className="style2">
          <label htmlFor="attr1-input">
            Atributo 1
            <input type="number" data-testid="attr1-input" id="attr1-input" />
          </label>
        </div>
        <div className="style2">

          <label htmlFor="attr2-input">
            Atributo 2
            <input type="number" data-testid="attr2-input" id="attr2-input" />
          </label>

        </div>
        <div className="style2">
          <label htmlFor="attr3-input">
            Atributo 3
            <input type="number" data-testid="attr3-input" id="attr3-input" />
          </label>
        </div>
        <div className="style2">
          <label htmlFor="image-input">
            Imagem
            <input type="text" data-testid="image-input" id="image-input" />
          </label>
        </div>
        <div className="style1">
          <label htmlFor="rare-input">
            Raridade
            <select data-testid="rare-input" id="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>
        <div className="style2">
          <label htmlFor="trunfo-input">
            Super Trybe Tryunfo
            <input type="checkbox" data-testid="trunfo-input" id="trunfo-input" />
          </label>
        </div>
        <button className="btn" type="submit" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;

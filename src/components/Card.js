import React from 'react';
import PropTypes from 'prop-types';
import myTriunfo from '../images/mytriunfo.png';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div className="sm ml-20 w-2/3">

        <div className="border shadow-md mr-10 mt-8 rounded-lg">
          <div className="border shadow-md mx-5 my-5 rounded-lg bg-cyan-900">
            <div
              className="flex justify-center items-center rounded-t-lg bg-cyan-900"
            >
              { cardName
                ? (
                  <span
                    data-testid="name-card"
                    className="my-5 text-2xl text-cyan-50 font-bold"
                  >
                    { cardName }
                  </span>
                ) : (
                  <span
                    className="my-5 text-2xl text-cyan-50 font-bold"
                  >
                    Nome da carta
                  </span>
                )}
            </div>
            <div className="flex justify-center bg-cyan-50">
              {cardImage
                ? (
                  <img data-testid="image-card" src={ cardImage } alt={ cardName } />
                ) : (
                  <img data-testid="image-card" src={ myTriunfo } alt="myTriunfo" />
                )}
            </div>
            <p
              data-testid="description-card"
              className="mx-4 my-4 text-sm"
            >
              {cardDescription}
            </p>
            <div className="ml-5 my-5">
              <p
                data-testid="attr1-card"
                className="text-cyan-50 font-semibold leading-loose tracking-wide"
              >
                Atributo 1  .......................................
                {' '}
                { cardAttr1 }
              </p>
              <p
                data-testid="attr2-card"
                className="text-cyan-50 font-semibold leading-loose tracking-wide"
              >
                Atributo 2  .......................................
                {' '}
                { cardAttr2 }
              </p>
              <p
                data-testid="attr3-card"
                className="text-cyan-50 font-semibold leading-loose tracking-wide"
              >
                Atributo 3  .......................................
                {' '}
                { cardAttr3 }
              </p>
              <p
                data-testid="rare-card"
                className="text-cyan-50 uppercase my-2"
              >
                {cardRare}
              </p>
            </div>
            <div className="flex justify-end mb-4 mr-6">
              {cardTrunfo && <p
                data-testid="trunfo-card"
                className="font-bold text-cyan-50"
              >
                Super Trunfo
              </p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;

import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      card: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validation = this.validation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkTrunfo = this.checkTrunfo.bind(this);
    // this.deleteCard = this.deleteCard.bind(this);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { state } = this;

    const newCard = {
      cardName: state.cardName,
      cardDescription: state.cardDescription,
      cardAttr1: state.cardAttr1,
      cardAttr2: state.cardAttr2,
      cardAttr3: state.cardAttr3,
      cardImage: state.cardImage,
      cardRare: state.cardRare,
      cardTrunfo: state.cardTrunfo,
    };

    this.setState((prevState) => ({ card: [...prevState.card, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), () => {
      this.checkTrunfo();
    });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validation());
  }

  checkTrunfo() {
    const { state } = this;
    const trunfo = state.card.some((element) => element.cardTrunfo === true);
    this.setState({ hasTrunfo: trunfo });
  }

  validation() {
    const { state: {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } } = this;

    const sum = 210;
    const maxScore = 90;

    if ((!cardName)
      || (!cardDescription)
      || (!cardImage)
      || (!cardRare)
      || ((parseFloat(cardAttr1) + parseFloat(cardAttr2) + parseFloat(cardAttr3)) > sum)
      || cardAttr1 > maxScore || cardAttr1 < 0
      || cardAttr2 > maxScore || cardAttr2 < 0
      || cardAttr3 > maxScore || cardAttr3 < 0) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  // deleteCard(item) {
  //   const { card } = this.state;
  //   const newList = card.filter((e) => e.cardName !== item);

  //   this.setState({
  //     card: newList,
  //   }, this.checkTrunfo());
  // }

  render() {
    const { state: {
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
      card },
    onInputChange,
    onSaveButtonClick } = this;

    return (
      <div className="app-container">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <div className="card-list">
          { card.length > 0 && (card.map((e) => (
            <div className="list-content" key={ e.cardName }>
              <Card
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
                key={ e.cardName }
              />
              {/* <button
                type="button"
                data-testid="delete-button"
                onClick={ this.deleteCard({ cardName }) }
              >
                Excluir
              </button> */}
            </div>)))}
        </div>

      </div>
    );
  }
}

export default App;

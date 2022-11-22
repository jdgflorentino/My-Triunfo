import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Filter from './components/Filter';

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
      searchInput: '',
      searchSelect: 'todas',
      searchTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validation = this.validation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkTrunfo = this.checkTrunfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch({ target: { name, value, type, checked } }) {
    this.setState({ [name]: type === 'checkbox' ? checked : value });
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

  deleteCard({ target }) {
    const { card } = this.state;
    const newList = card.filter((e) => e.cardName !== target.name);
    const trunfo = newList.some((element) => element.cardTrunfo === true);
    this.setState({
      card: newList,
      hasTrunfo: trunfo,
    }, this.checkTrunfo());
  }

  checkTrunfo() {
    const { state } = this;
    const trunfo = state.card.some((element) => element.cardTrunfo === true);
    this.setState({ hasTrunfo: trunfo });
  }

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
      card,
      searchInput,
      searchSelect,
      searchTrunfo },
    onInputChange,
    onSaveButtonClick,
    handleSearch } = this;

    return (
      <div className="container mx-auto px-4 bg-cyan-700">
        <div className="flex justify-center">
          <h1 className="mt-8 text-4xl font-bold text-amber-600">My Triunfo</h1>
        </div>

        <div className="grid grid-cols-2 bg-slate-100 mx-36 my-24">
          <div className="col-start-1">

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
          </div>
          <div className="float-left">
            <div className="flex justify-start ml-20 mt-20">
              <h1 className="text-2xl text-amber-600 font-medium">Pré-visualização</h1>
            </div>
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

          </div>
        </div>

        <div className="flex flex-col bg-slate-100 mx-36 mt-24">
          <div className="flex justify-center my-10">
            <p
              className="text-4xl text-amber-600 font-medium"
            >
              Todas as cartas
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Filter
              handleSearch={ handleSearch }
              searchInput={ searchInput }
              searchSelect={ searchSelect }
              searchTrunfo={ searchTrunfo }
            />
          </div>

          <div className="grid grid-flow-row grid-cols-2">
            { card.length > 0 && (card.filter(
              (e) => e.cardName.includes(searchInput),
            ))
              .filter((e) => (searchSelect === 'todas'
                ? e.cardRare.includes('')
                : e.cardRare === searchSelect))
              .filter((e) => (searchTrunfo
                ? e.cardTrunfo
                : true))
              .map((e) => (
                <div
                  className="flex flex-col justify-center content-center"
                  key={ e.cardName }
                >
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
                  <div className="flex content-center ml-20">
                    <button
                      className="font-general-medium flex justify-center items-center
          w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg
          border border-orange-200 py-2.5 sm:py-3 shadow-lg rounded-lg
          bg-orange-50 focus:ring-1 focus:ring-orange-900
          hover:bg-orange-500 text-gray-500 hover:text-white duration-500"
                      type="button"
                      name={ e.cardName }
                      data-testid="delete-button"
                      onClick={ this.deleteCard }
                    >
                      Excluir
                    </button>

                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

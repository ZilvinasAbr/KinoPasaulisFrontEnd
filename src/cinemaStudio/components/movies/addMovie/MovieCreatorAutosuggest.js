import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Button } from 'react-bootstrap';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const getSuggestionValue = suggestion => `${suggestion.firstName} ${suggestion.lastName}`;

class MovieCreatorAutosuggest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };

    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  componentDidMount() {

  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.movieCreators.filter(mc => {

      const selectedMovieCreators = this.props.selectedMovieCreators;
      const isSelected = selectedMovieCreators.filter(selected => selected.id == mc.id).length;
      if(isSelected){
        return false;
      }

      const fullName = `${mc.firstName} ${mc.lastName}`.toLowerCase();
      return fullName.indexOf(inputValue) !== -1;
    });
  };

  renderSuggestion(suggestion) {
    const fullName = `${suggestion.firstName} ${suggestion.lastName}`;
    return (
      <div>
        {fullName}
        <Button bsStyle="success" onClick={() => this.props.selectMovieCreator(suggestion)}>
          Pridėti
        </Button>
      </div>
    );
  };

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    })
  };

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
      value: ''
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Ieškoti kino kūrėjo',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default MovieCreatorAutosuggest;
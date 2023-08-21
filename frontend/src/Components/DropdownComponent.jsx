import React, { Component } from 'react';
import './DropdownStyles.css'; // Import the CSS file

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  handleOptionChange = event => {
    this.setState({ selectedOption: event.target.value });
  };

  render() {
    const { selectedOption } = this.state;
    const options = this.props.options;

    return (
      <div className={selectedOption ? 'dropdown-open' : ''}>
        <select
          value={selectedOption}
          onChange={this.handleOptionChange}
        >
          {options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className="dropdown-option" // Apply custom styles to each option
            >
              {option.label}
            </option>
          ))}
        </select>
        <p>You selected: {selectedOption}</p>
      </div>
    );
  }
}

export default DropdownComponent;

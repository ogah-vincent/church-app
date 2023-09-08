import React, { Component } from 'react';
import './DropdownStyles.css'; // Import the CSS file

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      selectedOption: '',
    };
  }

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  handleDropdownMouseEnter = () => {
    this.setState({ isDropdownOpen: true });
  };

  handleDropdownMouseLeave = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { isDropdownOpen, selectedOption } = this.state;
    const options = this.props.options;

    return (
      <div
        className={`dropdown-container ${isDropdownOpen ? 'open' : ''}`}
        onMouseEnter={this.handleDropdownMouseEnter}
        onMouseLeave={this.handleDropdownMouseLeave}
      >
        <select value={selectedOption} onChange={this.handleOptionChange}>
          {options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className="dropdown-option"
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

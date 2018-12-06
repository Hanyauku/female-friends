import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Age', label: '20' },
  { value: 'Age', label: '52' },
  { value: 'Age', label: '40' },
  { value: 'Age', label: '32' },
  { value: 'Age', label: '60' },
  { value: 'Age', label: '58' },
];

export default class SelectAge extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Select the Age"
      />
    );
  }
}
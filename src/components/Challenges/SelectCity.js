import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Rotterdam', label: 'Rotterdam' },
  { value: 'Amsterdam', label: 'Amsterdam' },
  { value: 'Eindoven', label: 'Eindoven' },
  { value: 'Utrecht', label: 'Utrecht' },
  { value: 'Zwolle', label: 'Zwolle' },
  { value: 'Dordrecht', label: 'Dordrecht' }
];

export default class SelectCity extends React.Component {
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
        placeholder="Select a city"
      />
    );
  }
}
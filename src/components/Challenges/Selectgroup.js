import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Friends funs', label: 'Friends funs' },
  { value: 'Restart Network Female', label: 'Restart Network Female' },
  { value: 'movie fans', label: 'CIC female' },
  { value: 'Utrecht Female ', label: 'Utrecht Femele' },
  { value: 'Yoyo ', label: 'Yoyo' },
  { value: 'Today Dordrecht', label: 'Today Dordrecht' }
];

export default class Selectgroup extends React.Component {
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
        placeholder="Select a group"
      />
    );
  }
}
import React from 'react';
import PropTypes from 'prop-types';

export default class DataLoader extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
  };

  state = {
    data: {
      json: null,
      error: null,
    },
  };

  render() {
    return this.props.render && this.props.render(this.state.data);
  }

  async componentDidMount() {
    if (!this.props.url) return;
    if (!this.props.render) return;

    try {
      let response = await fetch(this.props.url);
      let json = await response.json();
      this.setState({
        data: {
          json,
        },
      });
    } catch (exception) {
      this.setState({
        error: {
          exception,
        },
      });
    }
  }
}

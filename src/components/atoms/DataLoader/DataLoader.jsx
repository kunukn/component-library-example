import React from 'react';
import PropTypes from 'prop-types';

export default class DataLoader extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
  };

  state = {
    error: null,
    data: null,
    isLoading: false,
    url: this.props.url,
  };

  render() {
    return this.props.render && this.props.render(this.state);
  }

  async componentDidMount() {
    if (!this.props.url) return;
    if (!this.props.render) return;

    try {
      this.setState({
        isLoading: true,
      });
      let response = await fetch(this.props.url);
      let data = await response.json();
      this.setState({
        data,
      });
    } catch (exception) {
      this.setState({
        error: exception + '',
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }
}

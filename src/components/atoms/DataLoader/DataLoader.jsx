import React from 'react';
import PropTypes from 'prop-types';
import { getJsonAsync } from 'src/utils';
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
    if (this.props.disabled) return;

    this.setState({
      isLoading: true,
    });

    try {
      this.setState({
        data: await getJsonAsync(this.props.url),
        isLoading: false,
      });
    } catch (exception) {
      this.setState({
        error: exception + '',
        isLoading: false,
      });
    }
  }
}

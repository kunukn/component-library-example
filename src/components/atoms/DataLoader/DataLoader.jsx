import React from 'react';
import PropTypes from 'prop-types';
import { getJsonAsync } from 'src/utils';
export default class DataLoader extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    render: PropTypes.func.isRequired,
  };

  static defaultProps = {
    loadOnMount: true,
  };

  state = {
    error: null,
    data: null,
    isLoading: false,
  };

  reload = () => {
    this.loadData();
  };

  render() {
    return (
      this.props.render &&
      this.props.render({
        ...this.state,
        url: this.props.url,
        loadOnMount: this.props.loadOnMount,
        reload: this.reload,
      })
    );
  }

  loadData = async () => {
    if (!this.props.url) return;
    if (!this.props.render) return;

    this.setState({
      isLoading: true,
    });

    try {
      let { data, status } = await getJsonAsync(this.props.url);

      this.setState({
        data,
        isLoading: false,
        hasError: status >= 400,
      });
    } catch (exception) {
      this.setState({
        error: exception + '',
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.props.loadOnMount && this.loadData();
  }
}

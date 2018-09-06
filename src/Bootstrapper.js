import 'components/base/_main.scss'; // this scss imports other depedencies
import 'components/base/_typography.scss'; // module import typography, not scss import

import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from 'components/pages';
import { AppContext } from 'src/context';
import 'whatwg-fetch';
import Promise from 'promise';
import 'src/icon-system/icons.svg'; // make it available as resource at url: /icons.svg
//import 'src/icon-system/load-icons'; // IE support. Inline add SVG in the DOM from url. Is already added in html using script there
import testES8 from './test-es8';

const root = typeof window !== 'undefined' ? window : global;
if (!root.Promise) {
  root.Promise = Promise;
}

testES8();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      version: 1,
      name: '',
      count: '',
      updateName: this.updateName,
      updateCount: this.updateCount,
    };
  }

  updateName = event => {
    let name = event.target.value;
    this.setState({ name });
  };

  updateCount = event => {
    let count = event.target.value;
    this.setState({ count });
  };

  render() {
    return (
      <div className="app">
        <AppContext.Provider value={this.state}>
          <HomePage />
        </AppContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

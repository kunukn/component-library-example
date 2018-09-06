import 'components/base/_main.scss'; // this scss imports other depedencies
import 'components/base/_typography.scss'; // module import typography, not scss import

import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from 'components/pages';
import { AppContext } from 'src/contexts';
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

const reducer = (state, action) => {
  if (action.type === 'NAME') {
    return { ...state, name: action.payload };
  }
  if (action.type === 'COUNT') {
    return { ...state, count: action.payload };
  }
  return state;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      version: 1,
      name: '',
      count: '',
      dispatch: action => {
        this.setState(state => reducer(state, action));
      },
    };
  }

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

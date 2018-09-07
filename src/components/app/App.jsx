import 'components/base/_main.scss'; // this scss imports other depedencies
import 'components/base/_typography.scss'; // module import typography, not scss import
import './app.scss';

import React from 'react';
import { HomePage } from 'components/pages';
import { AppContext } from 'src/contexts';
import { appReducer } from 'src/reducers';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      count: '',
      dispatch: action => {
        this.setState(state => appReducer(state, action));
      },
    };
  }

  render() {
    return (
      <div className="app">
        <h3>appState</h3>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <AppContext.Provider value={this.state}>
          <HomePage />
        </AppContext.Provider>
      </div>
    );
  }
}

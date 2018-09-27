import 'components/base/_main.scss'; // this scss imports other depedencies
import 'components/base/_typography.scss'; // module import typography, not scss import
import './app.scss';

import React from 'react';
import { HomePage } from 'components/pages';
import { Icon } from 'components/atoms';
import { AppContext } from 'src/contexts';
import { appReducer } from 'src/reducers';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const A = () => (
  <div>
    A <Icon name="pin" />
  </div>
);
const B = () => (
  <div>
    B <Icon name="pin" />
  </div>
);
const C = () => (
  <div>
    C <Icon name="pin" />
  </div>
);

/**
 * Similar to Redux Thunk
 */
function appDispatchResolver(app, action) {
  if (typeof action === 'function') {
    action(app.dispatch, app.getState);
  } else {
    app.setState(prevState => ({
      values: appReducer(prevState.values, action),
    }));
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: 'name',
        count: 1,
        test: 'test',
      },
      dispatch: this.dispatch,
    };
  }

  getState = () => this.state.values;

  dispatch = action => appDispatchResolver(this, action);

  render() {
    return (
      <div className="app">
        <h3>appState</h3>
        <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        <AppContext.Provider value={this.state}>
          <Router>
            <React.Fragment>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/a">A</Link>
                </li>
                <li>
                  <Link to="/b">B</Link>
                </li>
                <li>
                  <Link to="/c">C</Link>
                </li>
              </ul>

              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/a" component={A} />
                <Route path="/b" component={B} />
                <Route path="/c" component={C} />
              </Switch>
            </React.Fragment>
          </Router>
        </AppContext.Provider>
      </div>
    );
  }
}

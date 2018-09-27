import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Icon } from 'components/atoms';
import { withAppState } from 'src/contexts';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/route-1">Home</Link>
          </li>
          <li>
            <Link to="/route-2">About</Link>
          </li>
          <li>
            <Link to="/route-3">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/route-1" component={Home} />
        <Route path="/route-2" component={About} />
        <Route path="/route-3" component={Topics} />
      </div>
    </Router>
  );
}

const Home = withAppState(({ appState }) => (
  <div>
    <h2>Home - {appState.test}</h2>
    <Icon name="pin" />
  </div>
));

const About = () => (
  <div>
    <h2>About</h2>
    <Icon name="pin" />
  </div>
);

const Topics = () => (
  <div>
    <h2>Topics</h2>
    <Icon name="pin" />
  </div>
);

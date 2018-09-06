import React from 'react';

export const AppContext = React.createContext();

export function withAppState(Component) {
  return function AppStateComponent(props) {
    return <AppContext.Consumer>{appState => <Component {...props} appState={appState} />}</AppContext.Consumer>;
  };
}

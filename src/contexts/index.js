import React from 'react';

export const AppContext = React.createContext({
  dispatch: () => {
    console.error('please implement dispatch function');
  },
});

export function withAppState(Component) {
  return function AppStateComponent(props) {
    return <AppContext.Consumer>{appState => <Component {...props} appState={appState} />}</AppContext.Consumer>;
  };
}

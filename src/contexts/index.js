import React from 'react';

export const AppContext = React.createContext({
  dispatch: () => {
    console.error('please implement dispatch function');
  },
});

export function withAppState(Component) {
  return function AppStateComponent(props) {
    return (
      <AppContext.Consumer>
        {state => <Component {...props} appState={state.values} dispatch={state.dispatch} />}
      </AppContext.Consumer>
    );
  };
}

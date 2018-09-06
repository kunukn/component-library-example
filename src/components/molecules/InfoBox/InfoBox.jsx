import './info-box.scss';
import React from 'react';
import { AppContext } from 'src/contexts';

export default function InfoBox({ title, children }) {
  return (
    <AppContext.Consumer>
      {appState => {
        let onNameChange = e => appState.dispatch({ type: 'NAME', payload: e.target.value });
        let onCountChange = e => appState.dispatch({ type: 'COUNT', payload: e.target.value });
        return (
          <div className="info-box">
            <p className="info-box__title">{title}</p>
            <p>{appState.version}</p>
            <div>{children}</div>
            <input type="text" placeholder="type name" value={appState.name} onChange={onNameChange} />
            <input type="number" placeholder="type count" value={appState.count} onChange={onCountChange} />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

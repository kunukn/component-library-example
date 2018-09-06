import './info-box.scss';
import React from 'react';
import { AppContext } from 'src/context';

export default function InfoBox({ title, children }) {
  return (
    <AppContext.Consumer>
      {appState => (
        <div className="info-box">
          <p className="info-box__title">{title}</p>
          <p>{appState.version}</p>
          <div>{children}</div>
          <input type="text" placeholder="type name" value={appState.name} onChange={appState.updateName} />
          <input type="number" placeholder="type count" value={appState.count} onChange={appState.updateCount} />
        </div>
      )}
    </AppContext.Consumer>
  );
}

import './info-box.scss';
import React from 'react';
import { AppContext } from 'src/context';

export default function InfoBox({ title, children }) {
  return (
    <AppContext.Consumer>
      {state => (
        <div className="info-box">
          <p className="info-box__title">{title}</p>
          <p>{state.version}</p>
          {children}
        </div>
      )}
    </AppContext.Consumer>
  );
}

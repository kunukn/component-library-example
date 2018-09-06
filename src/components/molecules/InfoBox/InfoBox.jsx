import './info-box.scss';
import React from 'react';

export default function InfoBox({ title, children }) {
  return (
    <div className="info-box">
      <p className="info-box__title">{title}</p>
      {children}
    </div>
  );
}

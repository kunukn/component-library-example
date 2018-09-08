import './info-box.scss';
import React from 'react';
import { Button } from 'components/atoms';
import { withAppState } from 'src/contexts';
import { NAME_UPDATED, COUNT_UPDATED } from 'src/actions/actionTypes';
import { loadData } from 'src/actions';

function InfoBox({ title, children, appState, dispatch }) {
  let onNameChange = e => dispatch({ type: NAME_UPDATED, payload: e.target.value });
  let onCountChange = e => dispatch({ type: COUNT_UPDATED, payload: e.target.value });
  let onLoadClick = () => loadData(dispatch, 'https://jsonplaceholder.typicode.com/todos/1');

  return (
    <div className="info-box">
      <p className="info-box__title">{title}</p>
      <div>{children}</div>
      <input type="text" placeholder="type name" value={appState.name} onChange={onNameChange} />
      <input type="number" placeholder="type count" value={appState.count} onChange={onCountChange} />
      <Button onClick={onLoadClick}>load data</Button>
    </div>
  );
}

export default withAppState(InfoBox);

import './info-box.scss';
import React from 'react';
import cx from 'classnames';
import { Button } from 'components';
import { withAppState } from 'src/contexts';
import { NAME_UPDATED, COUNT_UPDATED } from 'src/actions/actionTypes';
import { loadData, loadData2 } from 'src/actions';
import { getModifiersArray, E, M } from 'src/utils';

const BLOCK = 'info-box';
const e = element => E(BLOCK, element);
const m = modifier => M(BLOCK, modifier);

function InfoBox({ title, children, appState, dispatch, modifiers, mod, className }) {
  let onNameChange = ev => dispatch({ type: NAME_UPDATED, payload: ev.target.value });
  let onCountChange = ev => dispatch({ type: COUNT_UPDATED, payload: ev.target.value });
  //let onLoadClick = () => loadData(dispatch, 'https://jsonplaceholder.typicode.com/todos/1');
  let onLoadClick = () => dispatch(loadData2('https://jsonplaceholder.typicode.com/todos/1'));

  return (
    <div className={cx(getModifiersArray(BLOCK, mod || modifiers), className)}>
      <p className={e('title')}>{title}</p>
      <div>{children}</div>
      <input type="text" placeholder="type name" value={appState.name} onChange={onNameChange} />
      <input type="number" placeholder="type count" value={appState.count} onChange={onCountChange} />
      <Button onClick={onLoadClick}>load data</Button>
    </div>
  );
}

export default withAppState(InfoBox);

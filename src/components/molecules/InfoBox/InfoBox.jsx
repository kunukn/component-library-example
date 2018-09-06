import './info-box.scss';
import React from 'react';
import { Button } from 'components/atoms';
import { AppContext } from 'src/contexts';
import { getJsonAsync, sleep } from 'src/utils';

async function loadData(dispatch) {
  try {
    dispatch({ type: 'LOADDATA_STARTED' });
    await sleep(2000);
    let data = await getJsonAsync('https://jsonplaceholder.typicode.com/todos/1');
    dispatch({ type: 'LOADDATA_SUCCESS', payload: data });
  } catch (ex) {
    dispatch({ type: 'LOADDATA_FAILURE', payload: ex });
  }
}

export default function InfoBox({ title, children }) {
  return (
    <AppContext.Consumer>
      {appState => {
        let onNameChange = e => appState.dispatch({ type: 'NAME', payload: e.target.value });
        let onCountChange = e => appState.dispatch({ type: 'COUNT', payload: e.target.value });
        let onLoadClick = () => loadData(appState.dispatch);

        return (
          <div className="info-box">
            <p className="info-box__title">{title}</p>
            <div>{children}</div>
            <input type="text" placeholder="type name" value={appState.name} onChange={onNameChange} />
            <input type="number" placeholder="type count" value={appState.count} onChange={onCountChange} />
            <Button onClick={onLoadClick}>load data</Button>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

import { getJsonAsync, sleep } from 'src/utils';

export const actionTypes = {
  LOADDATA_STARTED: 'LOADDATA_STARTED',
  LOADDATA_SUCCESS: 'LOADDATA_SUCCESS',
  LOADDATA_FAILURE: 'LOADDATA_FAILURE',
  NAME: 'NAME',
  COUNT: 'COUNT',
};

let { LOADDATA_STARTED, LOADDATA_SUCCESS, LOADDATA_FAILURE } = actionTypes;

export async function loadData(dispatch, url) {
  try {
    dispatch({ type: LOADDATA_STARTED });
    await sleep(1000); // simulate latency
    let data = await getJsonAsync(url);
    dispatch({ type: LOADDATA_SUCCESS, payload: data });
  } catch (ex) {
    dispatch({ type: LOADDATA_FAILURE, payload: ex });
  }
}

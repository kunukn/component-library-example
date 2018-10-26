import { getJsonAsync, sleep } from 'src/utils';
import { LOADDATA_STARTED, LOADDATA_SUCCEEDED, LOADDATA_FAILED } from './actionTypes';

export async function loadData(dispatch, url) {
  try {
    dispatch({ type: LOADDATA_STARTED });
    await sleep(1000); // simulate latency
    let { data, status } = await getJsonAsync(url);

    if (status >= 400) {
      dispatch({ type: LOADDATA_FAILED, payload: data });
    } else {
      dispatch({ type: LOADDATA_SUCCEEDED, payload: data });
    }
  } catch (ex) {
    dispatch({ type: LOADDATA_FAILED, payload: ex });
  }
}

export function loadData2(url) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: LOADDATA_STARTED });
      await sleep(1000); // simulate latency
      let { data, status } = await getJsonAsync(url);

      if (status >= 400) {
        dispatch({ type: LOADDATA_FAILED, payload: data });
      } else {
        dispatch({ type: LOADDATA_SUCCEEDED, payload: data });
      }
    } catch (ex) {
      dispatch({ type: LOADDATA_FAILED, payload: ex });
    }
  };
}

import { actionTypes } from 'src/actions';
let { NAME, COUNT, LOADDATA_STARTED, LOADDATA_SUCCESS, LOADDATA_FAILURE } = actionTypes;

export default function appReducer(state, action) {
  let { type, payload } = action;

  if (type === NAME) return { ...state, name: payload };

  if (type === COUNT) return { ...state, count: payload };

  if (type === LOADDATA_STARTED) return { ...state, loadingData: true };

  if (type === LOADDATA_SUCCESS) return { ...state, loadedData: payload, loadingData: false };

  if (type === LOADDATA_FAILURE) return { ...state, loadedError: payload, loadingData: false };

  return state;
}

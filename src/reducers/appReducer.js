export default function appReducer(state, action) {
  if (action.type === 'NAME') {
    return { ...state, name: action.payload };
  }
  if (action.type === 'COUNT') {
    return { ...state, count: action.payload };
  }
  if (action.type === 'LOADDATA_STARTED') {
    return { ...state, loadingData: true };
  }
  if (action.type === 'LOADDATA_SUCCESS') {
    return { ...state, loadedData: action.payload, loadingData: false };
  }
  if (action.type === 'LOADDATA_FAILURE') {
    return { ...state, loadedError: action.payload, loadingData: false };
  }

  return state;
}

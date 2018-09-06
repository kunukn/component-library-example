const addPromiseSupportToDispatch = dispatch => action => {
  if (typeof action.then === 'function') {
    return action.then(dispatch);
  }
  return dispatch(action);
};

export default addPromiseSupportToDispatch;

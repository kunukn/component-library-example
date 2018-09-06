import getJsonAsync from './getJsonAsync';
import addPromiseSupportToDispatch from './addPromiseSupportToDispatch';

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export { getJsonAsync, addPromiseSupportToDispatch, sleep };

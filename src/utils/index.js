import getJsonAsync from './getJsonAsync';

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export { getJsonAsync, sleep };

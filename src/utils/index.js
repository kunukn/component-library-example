import getJsonAsync from './getJsonAsync';
import postJsonAsync from './postJsonAsync';

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export { getJsonAsync, postJsonAsync, sleep };

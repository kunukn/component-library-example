import getJsonAsync from './getJsonAsync';
import postJsonAsync from './postJsonAsync';

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const formatDate = date => {
  try {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) day = '0' + day;

    if (month < 10) month = '0' + month;

    return `${day}-${month}-${year}`;

  } catch (exception) {
    return '';
  }
};

const formatDateString = dateString => {
  try {
    return formatDate(new Date(dateString));
  } catch (exception) {
    return '';
  }
};

// https://davidwalsh.name/query-string-javascript
function getUrlParameter(value) {
  let name = value.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function updatePageTitle(title) {
  if (title) {
    document.title = title;
  }
}

function getModifiersArray(prefix, modifiers) {
  if (!modifiers) return '';

  const modifiersArray = modifiers
    .trim()
    .split(' ')
    .map(m => m.trim())
    .filter(Boolean);
  return modifiersArray.map(m => `${prefix}--${m}`);
}

export {
  getJsonAsync,
  postJsonAsync,
  sleep,
  getUrlParameter,
  updatePageTitle,
  getModifiersArray,
  formatDateString,
  formatDate,
};

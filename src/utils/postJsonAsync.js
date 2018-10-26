export default async function postJsonAsync(url, options) {
  const response = await fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options),
  });

  const contentType = response.headers.get('content-type');

  let data;
  if (contentType && contentType.indexOf('application/json') !== -1) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  return { data, status: response.status };
}

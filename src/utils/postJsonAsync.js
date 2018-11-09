export default async function postJsonAsync(url, options) {
  const response = await fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options),
  });

  let data = null;
  let text = await response.text();

  if (text) {
    data = JSON.parse(text);
  }

  return { data, status: response.status };
}

export default async function postJsonAsync(url, options) {
  const response = await fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options),
  });

  return await response.json();
}

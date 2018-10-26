export default async function getJsonAsync(url) {
  const response = await fetch(url);

  const contentType = response.headers.get('content-type');

  let data;
  if (contentType && contentType.indexOf('application/json') !== -1) {
    data = await response.json();
  } else {
    data = await response.text();
  }
  return { data, status: response.status };
}

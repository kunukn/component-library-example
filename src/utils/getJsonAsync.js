export default async function getJsonAsync(url, callback) {
  const response = await fetch(url);
  callback && callback(response);
  return await response.json();
}

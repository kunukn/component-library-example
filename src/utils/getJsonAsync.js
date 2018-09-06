export default async function getJsonAsync(url) {
  const response = await fetch(url);
  return await response.json();
}

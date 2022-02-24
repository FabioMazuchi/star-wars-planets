async function fetchApi() {
  const res = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const resJson = await res.json();
  return resJson.results;
}

export default fetchApi;

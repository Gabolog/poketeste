async function fetchMovies() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    // waits until the request completes...
    return response.json()
    console.log(response);
    
  }
  const a = await fetchMovies()
  console.log(a)
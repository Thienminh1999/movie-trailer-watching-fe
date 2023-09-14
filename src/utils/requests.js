const API_KEY = "504b85f6fe0a10a9c7f35945e14e7ddf";

const requests = {
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/api/movies/trending`,
  fetchNetflixOriginals: `/api/movies/discover/28`,
  fetchTopRated: `/api/movies/top-rate`,
  fetchActionMovies: `/api/movies/discover/28`,
  fetchComedyMovies: `/api/movies/discover/35`,
  fetchHorrorMovies: `/api/movies/discover/27`,
  fetchRomanceMovies: `/api/movies/discover/10749`,
  fetchDocumentaries: `/api/movies/discover/99`,
  fetchSearch: `/api/movies/search`,
};

export default requests;

const api = "532c371fd4a0d8081e3b737501f1da10";
const request = {
    fetchTrending: `/trending/all/week?api_key=${api}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${api}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${api}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api}&with_genres=99`,
}
export default request;
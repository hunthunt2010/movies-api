const fetch = require("node-fetch");

const OMDB_BASE_URL = "https://www.omdbapi.com?apikey=ceb9bf8c";

const getMovieDetails = async (imdbId) => {
  try {
    const results = await fetch(`${OMDB_BASE_URL}&i=${imdbId}`);
    return results.json();
  } catch (e) {
    console.log("error fetching movies", e);
  }
};

module.exports = { getMovieDetails };

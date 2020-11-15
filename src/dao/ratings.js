const ratings = require("../db/ratingsDb");

const RATINGS_TABLES = "ratings";

const getAverageMovieRating = async (movieId) => {
  return ratings
    .select()
    .from(RATINGS_TABLES)
    .where({ movieId })
    .avg("rating");
};

module.exports = {
  getAverageMovieRating,
};

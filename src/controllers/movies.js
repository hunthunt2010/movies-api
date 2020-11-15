const {
  findAll,
  findAllByYear,
  findAllByGenre,
  get,
} = require("../dao/movies");
const { getAverageMovieRating } = require("../dao/ratings");
const { formatAsPrice } = require("../helpers/utils");

const DEFAULT_COLUMNS = ["imdbId", "title", "genres", "releaseDate", "budget"];

const formatResults = (results) => {
  return results.map((result) => {
    return { ...result, budget: formatAsPrice(result.budget) };
  });
};

const list = async (ctx, next) => {
  const genreFilter = ctx.query.genre;
  const yearFilter = ctx.query.year;
  const sort = ctx.query.sort || "asc";
  const limit = ctx.query.page;
  let queryBuilder = findAll(
    DEFAULT_COLUMNS,
    limit // will fallback to default if not defined
  );
  if (yearFilter) {
    findAllByYear(queryBuilder, yearFilter, sort);
  }

  if (genreFilter) {
    findAllByGenre(queryBuilder, genreFilter);
  }

  const results = await queryBuilder;

  ctx.body = formatResults(results);
  await next();
};

const details = async (ctx, next) => {
  const movieId = ctx.params.id;
  const movie = await get(movieId, [
    ...DEFAULT_COLUMNS,
    "overview",
    "runtime",
    "language",
    "productionCompanies",
  ]);
  if (!movie) {
    ctx.status = 404;
    await next();
    return;
  }
  const ratings = await getAverageMovieRating(movieId);
  ctx.body = {
    ...movie,
    averageRating: ratings && ratings[0]["avg(`rating`)"],
  };
  await next();
};

module.exports = {
  details,
  list,
};

const movies = require("../db/moviesDb");
const { formatDateAsString } = require("../helpers/utils");

const MOVIES_TABLES = "movies";

const findAll = (columns, limit = 50) => {
  const builder = movies.columns(...columns);
  return builder
    .select()
    .from(MOVIES_TABLES)
    .limit(limit);
};

const findAllByYear = async (builder, year, sort = "asc") => {
  const startOfYear = new Date(year, 0, 1);
  const endOfYear = new Date(year, 11, 1);
  return builder
    .whereBetween("releaseDate", [
      formatDateAsString(startOfYear),
      formatDateAsString(endOfYear),
    ])
    .orderBy([{ column: "releaseDate", order: sort }]);
};

const findAllByGenre = async (builder, genre) => {
  return builder.where("genres", "like", `%${genre}%`);
};

const get = async (id, columns = []) => {
  return movies
    .columns(...columns)
    .select()
    .from(MOVIES_TABLES)
    .where({ movieId: id })
    .first();
};

module.exports = {
  findAll,
  findAllByGenre,
  findAllByYear,
  get,
};

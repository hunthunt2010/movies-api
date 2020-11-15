## Purpose

This project serves an API for movies using KOA, Sqlite3, and Knex

## Supported Routes

`/movies` returns a list of movies

- Request
  optional query params can be supplied
  - `page` limits the number of results returned from the request
  - `year` filters the results to a certain release of a movie
  - `genre` filters the results to a certain genre of movie
- Response
  - "imdbId", "title", "genres", "releaseDate", "budget"

`/movies/:movieId` returns details about a specific movie

- Reponse
  - "imdbId", "title", "genres", "releaseDate", "budget", "overview", "runtime", "language", "productionCompanies"

## Purpose

This project serves an API for movies using KOA, Sqlite3, Knex and Jest

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

## Setup

`npm install && npm start`
`npm run start:dev` will run the server with live reload

This will start the server on port 8080 by default and use the database files locally in the project. An optional PORT env variable can be supplied to change the port `PORT=3000 npm start`

To run tests - `npm test` or `npm run test:watch`

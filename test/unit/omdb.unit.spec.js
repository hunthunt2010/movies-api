const { getMovieDetails } = require("../../src/api/omdb");

describe("OMDB API", () => {
  describe("getMovieDetails", () => {
    it("should return details about a movie", async () => {
      const results = await getMovieDetails("tt1990314");
      expect(results).toEqual({
        Actors: "Frank Langella, James Marsden, Liv Tyler, Peter Sarsgaard",
        Awards: "2 wins & 6 nominations.",
        BoxOffice: "N/A",
        Country: "USA",
        DVD: "N/A",
        Director: "Jake Schreier",
        Genre: "Comedy, Crime, Drama, Sci-Fi",
        Language: "English",
        Metascore: "67",
        Plot:
          "In the near future, an ex-jewel thief receives a gift from his son: a robot butler programmed to look after him. But soon the two companions try their luck as a heist team.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTUzMTE0NTk4Ml5BMl5BanBnXkFtZTcwNjQ1OTMwOA@@._V1_SX300.jpg",
        Production: "Park Pictures, Dog Run Pictures",
        Rated: "PG-13",
        Ratings: [
          { Source: "Internet Movie Database", Value: "7.1/10" },
          { Source: "Rotten Tomatoes", Value: "86%" },
          { Source: "Metacritic", Value: "67/100" },
        ],
        Released: "19 Sep 2012",
        Response: "True",
        Runtime: "89 min",
        Title: "Robot & Frank",
        Type: "movie",
        Website: "N/A",
        Writer: "Christopher Ford (screenplay)",
        Year: "2012",
        imdbID: "tt1990314",
        imdbRating: "7.1",
        imdbVotes: "61,520",
      });
    });
  });
});

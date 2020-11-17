const request = require("supertest");
const helper = require("../spec.helper");

describe(`GET /movies`, () => {
  // Expects that all the fields on the reponse object are set correctly
  const allFieldsSet = (results) => {
    const expectedFields = [
      "imdbId",
      "title",
      "genres",
      "releaseDate",
      "budget",
    ];
    return results.every((result) =>
      expectedFields.every((field) => Object.keys(result).includes(field))
    );
  };

  it("should return all movies without a filter and default to 50 results", async () => {
    const response = await request(helper.getApp()).get("/movies");
    expect(response.body.length).toEqual(50);
    expect(response.status).toEqual(200);
    expect(allFieldsSet(response.body)).toBe(true);
  });

  it("should filter result set size", async () => {
    const response = await request(helper.getApp()).get("/movies?page=10");
    expect(response.body.length).toEqual(10);
    expect(response.status).toEqual(200);
    expect(allFieldsSet(response.body)).toBe(true);
  });

  it("should filter result set by year - order asc", async () => {
    const response = await request(helper.getApp()).get(
      "/movies?page=1&year=1988"
    );
    expect(response.body.length).toEqual(1);
    expect(response.status).toEqual(200);
    expect(allFieldsSet(response.body)).toBe(true);
    expect(response.body[0].releaseDate).toBe("1988-01-01");
  });

  it("should filter result set by year - order desc", async () => {
    const response = await request(helper.getApp()).get(
      "/movies?page=1&year=1988&sort=desc"
    );
    expect(response.body.length).toEqual(1);
    expect(response.status).toEqual(200);
    expect(allFieldsSet(response.body)).toBe(true);
    expect(response.body[0].releaseDate).toBe("1988-12-01");
  });

  it("should filter result set by genre", async () => {
    const response = await request(helper.getApp()).get(
      "/movies?page=1&genre=Drama"
    );
    expect(response.body.length).toEqual(1);
    expect(response.status).toEqual(200);
    expect(allFieldsSet(response.body)).toBe(true);
    expect(response.body[0].title).toBe("Ariel");
  });

  it("should filter result set by genre and year", async () => {
    const response = await request(helper.getApp()).get(
      "/movies?page=1&year=1988&genre=Drama"
    );
    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(1);
    expect(allFieldsSet(response.body)).toBe(true);
    expect(response.body[0].title).toBe("Torch Song Trilogy");
  });

  it("should return 400 if a non number year supplied", async () => {
    const response = await request(helper.getApp()).get(
      "/movies?page=1&year=foo"
    );
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual("Invalid year param foo");
  });
});

describe(`GET /movies/movieId`, () => {
  it("should return movie with details", async () => {
    const response = await request(helper.getApp()).get("/movies/2");
    expect(response.status).toEqual(200);
    // In a real test I'd mock out this request here
    expect(response.body).toEqual({
      ratings: {
        "Internet Movie Database": "7.5/10",
        "Rotten Tomatoes": "87%",
        db: 3.4018691588785046,
      },
      budget: 0,
      genres: '[{"id": 18, "name": "Drama"}, {"id": 80, "name": "Crime"}]',
      imdbId: "tt0094675",
      language: null,
      overview:
        "Taisto Kasurinen is a Finnish coal miner whose father has just committed suicide and who is framed for a crime he did not commit. In jail, he starts to dream about leaving the country and starting a new life. He escapes from prison but things don't go as planned...",
      productionCompanies:
        '[{"name": "Villealfa Filmproduction Oy", "id": 2303}, {"name": "Finnish Film Foundation", "id": 2396}]',
      releaseDate: "1988-10-21",
      runtime: 69,
      title: "Ariel",
    });
  });

  it("should return 404 if movie isnt found", async () => {
    const response = await request(helper.getApp()).get(
      "/movies/9820938409234"
    );
    expect(response.status).toEqual(404);
  });
});

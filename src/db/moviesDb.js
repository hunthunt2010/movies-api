module.exports = require("knex")({
  client: "sqlite3",
  debug: true,
  connection: {
    filename: __dirname + "/movies.db",
  },
  useNullAsDefault: true,
});

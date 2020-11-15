module.exports = require("knex")({
  client: "sqlite3",
  connection: {
    filename: __dirname + "/movies.db",
  },
  useNullAsDefault: true,
});

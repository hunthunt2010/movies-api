module.exports = require("knex")({
  client: "sqlite3",
  debug: true,
  connection: {
    filename: __dirname + "/ratings.db",
  },
  useNullAsDefault: true,
});

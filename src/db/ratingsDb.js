module.exports = require("knex")({
  client: "sqlite3",
  connection: {
    filename: __dirname + "/ratings.db",
  },
  useNullAsDefault: true,
});

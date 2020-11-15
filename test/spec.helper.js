let app = null;

beforeAll(() => {
  app = require("../src/server").listen(3000);
  console.log("app started on 3000");
});

afterAll(() => {
  app.close();
});

const getApp = () => {
  if (!app) {
    console.log("before clause has not run yet");
  } else {
    return app;
  }
};

module.exports = {
  getApp,
};

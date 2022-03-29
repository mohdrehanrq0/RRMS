const app = require("./app");
const connectToDB = require("./libs/mongoose/index");

connectToDB();

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is listening on http://localhost:${process.env.PORT || 5000}`
  );
});

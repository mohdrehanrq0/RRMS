const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useFindAndModify: false,
    })
    .then(() => {
      console.log("Connected to mongodb.");
    })
    .catch((err) => console.log("Error in mongodb to connect  " + err));
};

module.exports = connectToDB;

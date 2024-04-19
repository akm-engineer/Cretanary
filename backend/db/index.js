import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db is connecting");
  })
  .catch((err) => {
    console.log(err);
  });

import express from "express";
import userRouter from "./routes/user.js";
import "./db/index.js";
import { userValidator } from "./middlewares/validator.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

//converting into json format
app.use(express.json());

app.use("/api/user", userValidator, userRouter);

app.listen(8000, () => {
  console.log(`Server is running on 8000`);
});

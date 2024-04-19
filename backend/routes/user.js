import express from "express";
import { changePassword, createUser, signIn } from "../controllers/user.js";
import {
  signInValidator,
  userValidator,
  validate,
} from "../middlewares/validator.js";
import { authenticateUser } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/create", userValidator, validate, createUser);
userRouter.post("/sign-in", signInValidator, signIn);
userRouter.post("/change-password", authenticateUser, changePassword);

export default userRouter;

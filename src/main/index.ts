import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import "../config/firebase";
import { CreateUserController } from "../authentication/create-user/controller";
import { verifyToken } from "../middlewares/verify-token";
import { SignInController } from "../authentication/sign-in/controller";

const app = express();

app.use(bodyParser.json());

app.post("/sign-up", CreateUserController);
app.post("/sign-in", SignInController);

app.use(verifyToken);
app.get("/protected-route", (req, res) => {
  res.send("This is a protected route");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

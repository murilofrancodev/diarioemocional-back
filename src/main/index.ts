import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import "../config/firebase";
import { CreateUserController } from "../application/authentication/create-user/controller";
import { verifyToken } from "../middlewares/verify-token";
import { SignInController } from "../application/authentication/sign-in/controller";
import { GetCalendarEntryByUserIdController } from "../application/calendar-entries/find-one/controller";
import { PostCalendarEntryController } from "../application/calendar-entries/create/controller";
import { GetEmotionByUserIdController } from "../application/emotions/find-one/controller";
import { PostEmotionsController } from "../application/emotions/create/controller";
import { GetAuthenticatedUserController } from "../application/users/find-authenticated/controller";

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post("/sign-up", CreateUserController);
app.post("/sign-in", SignInController);

app.use(verifyToken);
app.get("/user", GetAuthenticatedUserController);

app.get("/calendar/find", GetCalendarEntryByUserIdController);
app.post("/calendar/entry", PostCalendarEntryController);

app.get("/emotions/find", GetEmotionByUserIdController);
app.post("/emotions", PostEmotionsController);
app.listen(3001, () => {
  console.log("Server is running on port 3000");
});

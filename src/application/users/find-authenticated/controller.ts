import { Request, Response } from "express";
import { findAuthenticatedUser } from "./service";

export const GetAuthenticatedUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const uid = req.body.user.user_id;
    const userResponse = await findAuthenticatedUser(uid);
    res.status(201).json(userResponse);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error creating user");
  }
};

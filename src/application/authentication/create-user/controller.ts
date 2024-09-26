import { Request, Response } from "express";
import { createUser } from "./service";

export const CreateUserController = async (req: Request, res: Response) => {
  try {
    const { email, displayName, password } = req.body;
    const userResponse = await createUser(email, displayName, password);
    res.status(201).json(userResponse);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error creating user");
  }
};

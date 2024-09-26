import { Request, Response } from "express";
import { signIn } from "./service";

export const SignInController = async (req: Request, res: Response) => {
  try {
    const { email, displayName, refreshToken, idToken } = await signIn(
      req.body.email,
      req.body.password
    );
    res.status(201).json({
      displayName,
      email,
      token: idToken,
      refreshToken,
    });
  } catch (error: any) {
    res.status(401).send(error.response.data.error.message);
  }
};

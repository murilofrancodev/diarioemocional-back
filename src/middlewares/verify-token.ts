import { Request, Response, NextFunction } from "express";
import { auth } from "firebase-admin";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idToken = req.headers.authorization?.split("Bearer ")[1];
  if (!idToken) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decodedToken = await auth().verifyIdToken(idToken);
    req.body.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};

import { Request, Response } from "express";
import { getEmotionByUserId } from "./service";

export const GetEmotionByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId: string = req.body.user.user_id;
    const calendarResponse = await getEmotionByUserId(userId);
    res.status(201).json(calendarResponse);
  } catch (error) {
    console.error(error);
    res.status(400).send("ERROR_GETTING_EMOTIONS");
  }
};

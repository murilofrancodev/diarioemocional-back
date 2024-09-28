import { Request, Response } from "express";
import { postEmotion } from "./service";

export const PostEmotionsController = async (req: Request, res: Response) => {
  try {
    const userId: string = req.body.user.user_id;
    const { emotion, note }: Emotion = req.body;
    const calendarResponse = await postEmotion(userId, {
      emotion,
      note,
    });
    res.status(201).json(calendarResponse);
  } catch (error) {
    console.error(error);
    res.status(400).send("ERROR_CREATING_EMOTIONS");
  }
};

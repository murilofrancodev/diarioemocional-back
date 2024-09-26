import { Request, Response } from "express";
import { postCalendarEntry } from "./service";

export const PostCalendarEntryController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId: string = req.body.user.user_id;
    const { date, emotionId }: Entry = req.body;
    const calendarResponse = await postCalendarEntry(userId, {
      date,
      emotionId,
    });
    res.status(201).json(calendarResponse);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error getting entries");
  }
};

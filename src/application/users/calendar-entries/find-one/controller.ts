import { Request, Response } from "express";
import { getCalendarEntryByUserId } from "./service";

export const GetCalendarEntryByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId: string = req.body.user.user_id;
    const calendarResponse = await getCalendarEntryByUserId(userId);
    res.status(201).json(calendarResponse);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error getting entries");
  }
};

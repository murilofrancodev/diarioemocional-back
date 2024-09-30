import { firestore } from "firebase-admin";

const db = firestore();

const getEmotionById = async (userId: string, emotionId: string) => {
  const emotionsRef = db.collection("emotions");

  const querySnapshot = await emotionsRef.where("userId", "==", userId).get();

  if (querySnapshot.empty) {
    throw new Error("UNKNOWN_USER");
  }

  const doc = querySnapshot.docs[0];
  const emotionsData = doc.data().emotions;

  const emotion = emotionsData.find((e: any) => e.emotionId === emotionId);

  if (!emotion) {
    throw new Error("UNKNOWN_EMOTION");
  }
  return emotion;
};

export const getCalendarEntryByUserId = async (userId: string) => {
  const calendarEntriesRef = db.collection("calendarEntries");

  const querySnapshot = await calendarEntriesRef
    .where("userId", "==", userId)
    .get();

  if (querySnapshot.empty) {
    throw new Error("UNKNOWN_DOCUMENT");
  }

  const calendarDoc = querySnapshot.docs[0];
  const calendarData = calendarDoc.data();

  const entriesWithEmotions = await Promise.all(
    calendarData.entries.map(async (entry: any) => {
      const emotionData = await getEmotionById(userId, entry.emotionId);
      return {
        ...entry,
        ...emotionData,
      };
    })
  );

  return {
    userId: calendarData.userId,
    entries: entriesWithEmotions,
    updatedAt: calendarData.updatedAt,
    createdAt: calendarData.createdAt,
  };
};

import { firestore } from "firebase-admin";

const db = firestore();

export const getEmotionByUserId = async (userId: string) => {
  const calendarEntriesRef = db.collection("emotions");

  const querySnapshot = await calendarEntriesRef
    .where("userId", "==", userId)
    .get();

  if (querySnapshot.empty) {
    throw new Error("UNKNOWN_DOCUMENT");
  }

  const doc = querySnapshot.docs[0];
  return doc.data();
};

import { firestore } from "firebase-admin";

const db = firestore();

export const postCalendarEntry = async (userId: string, newEntry: Entry) => {
  const calendarEntriesRef = db.collection("calendarEntries");

  const querySnapshot = await calendarEntriesRef
    .where("userId", "==", userId)
    .get();

  if (querySnapshot.empty) {
    const newDoc = {
      userId,
      createdAt: new Date().toISOString(),
      entries: [newEntry],
    };

    await calendarEntriesRef.add(newDoc);
    return { message: "Document created successfully", newDoc };
  } else {
    const docRef = querySnapshot.docs[0].ref;
    const docData = querySnapshot.docs[0].data();
    const updatedEntries = [...docData.entries, newEntry];
    await docRef.update({
      entries: updatedEntries,
      updatedAt: new Date().toISOString(),
    });

    return { message: "Entry added successfully", updatedEntries };
  }
};

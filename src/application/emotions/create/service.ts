import { randomUUID } from "crypto";
import { firestore } from "firebase-admin";

const db = firestore();

export const postEmotion = async (userId: string, newEmotion: Emotion) => {
  const emotionsRef = db.collection("emotions");
  const emotionWithId = {
    ...newEmotion,
    createdAt: new Date().toISOString(),
    emotionId: randomUUID(),
  };
  const querySnapshot = await emotionsRef.where("userId", "==", userId).get();

  if (querySnapshot.empty) {
    const newDoc = {
      userId,
      createdAt: new Date().toISOString(),
      emotions: [emotionWithId],
    };

    await emotionsRef.add(newDoc);
    return { message: "Document created successfully", newDoc };
  } else {
    const docRef = querySnapshot.docs[0].ref;
    const docData = querySnapshot.docs[0].data();
    const updatedEmotions = [...docData.emotions, emotionWithId];
    await docRef.update({
      emotions: updatedEmotions,
      updatedAt: new Date().toISOString(),
    });

    return emotionWithId;
  }
};

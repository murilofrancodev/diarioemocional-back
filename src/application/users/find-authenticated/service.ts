import { auth } from "firebase-admin";

export const findAuthenticatedUser = async (userId: string) => {
  return await auth().getUser(userId);
};

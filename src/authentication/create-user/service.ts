import { auth } from "firebase-admin";

export const createUser = async (
  email: string,
  displayName: string,
  password: string
) => {
  const userResponse = await auth().createUser({
    email,
    password,
    displayName,
    emailVerified: false,
    disabled: false,
  });
  return userResponse;
};

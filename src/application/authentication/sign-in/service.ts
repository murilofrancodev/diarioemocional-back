import axios from "axios";

export const signIn = async (email: string, password: string) => {
  const signInResponse = await axios.post(
    `${process.env.GOOGLE_API_URL}${process.env.FIREBASE_API_KEY}`,
    { email: email, password: password, returnSecureToken: true }
  );
  return signInResponse.data;
};

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, setInCollection } from "./firebaseUtils";
import { firebaseErrors } from "@/constants/firebaseErrors";
import { showErrorMessage } from "@/utils/windowMessages";

export const signInWithEmailAndPw = async ({ email, password }) => {
  try {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email.trim(), password)
      .then(({ user: { uid } }) => uid)
      .catch((error) => {
        showErrorMessage({
          text: firebaseErrors?.[error.code] || "Error while sign in",
        });
        throw error;
      });
  } catch (error) {
    console.error("Error while sign in", error);
    throw error;
  }
};

const DEFAULT_USER_FIELDS = { imageUrl: "", role: "user" };

export const registerWithEmailAndPw = async ({
  email,
  password,
  ...userInfo
}) => {
  try {
    if (!email || !password) {
      throw "Email or password is not provided!";
    }

    return await createUserWithEmailAndPassword(auth, email.trim(), password)
      .then(({ user: { uid, email } }) => {
        setInCollection("users", uid, {
          ...userInfo,
          email,
          ...DEFAULT_USER_FIELDS,
        });
      })
      .catch((error) => {
        showErrorMessage({
          text: firebaseErrors?.[error.code] || "Error while sign up",
        });
        throw error;
      });
  } catch (error) {
    console.error("Error while sign up", error);
    throw error;
  }
};

export const getUserByUid = async (userId) => {
  if (!userId) return {};

  const userDocRef = doc(db, "users", userId);

  const userSnapshot = await getDoc(userDocRef.firestore);

  return userSnapshot.data();
};

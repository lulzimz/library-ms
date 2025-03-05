import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { initializeAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_KEY,
  projectId: import.meta.env.VITE_API_KEY,
  storageBucket: import.meta.env.VITE_API_KEY,
  messagingSenderId: import.meta.env.VITE_API_KEY,
  appId: import.meta.env.VITE_API_KEY,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = initializeAuth(app);

const updateData = (data) => {
  return Object.entries(data).reduce(
    (acc, [key, val]) => ({ ...acc, ...(val && { [key]: val }) }),
    {}
  );
};

export const getCollection = async (collectionId) => {
  try {
    if (!collectionId) return [];

    const collectionDoc = await getDocs(collection(db, collectionId));

    const items = [];

    collectionDoc.forEach((item) => {
      const data = item.data();

      items.push({ id: item.id, ...data });
    });

    console.log(`getCollection in ${collectionId}`);

    return items;
  } catch (error) {
    console.error("Error while fetching from " + collectionId, error);
  }
};

//this is used when we have a custom id
export const setInCollection = async (collectionId, objId, data) => {
  try {
    const currDoc = doc(db, collectionId, objId);

    await setDoc(currDoc, updateData(data));
  } catch (error) {
    console.error("Error while saving in " + collectionId, error);
  }
};

export const createInCollection = async (collectionId, data) => {
  try {
    const productsCollection = collection(db, collectionId);

    // Add the document to the collection
    const docRef = await addDoc(productsCollection, data);

    // Return the document's ID (or any other result you need)
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error while saving in " + collectionId, error);
  }
};

export const updateCollection = async (collectionId, id, data) => {
  try {
    const currDoc = doc(db, collectionId, id);

    return await updateDoc(currDoc, updateData(data));
  } catch (error) {
    console.error("Error while updating in " + collectionId, error);
  }
};

export const deleteFromCollection = async (collectionId, id) => {
  try {
    const currDoc = doc(db, collectionId, id);
    await deleteDoc(currDoc);
  } catch (error) {
    console.error("Error while deleting from " + collectionId, error);
  }
};

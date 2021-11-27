import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { fbStore, fbTimeStamp } from "../firebase";
import { useAuth } from "../context/context";
import { AddDataProps } from "../interfaces/vaultTypes";

export const useFireStore = () => {
  const ref = collection(fbStore, "users");

  const { currentUser } = useAuth()!;

  const addUserData = async (value: AddDataProps) => {
    if (!currentUser) return;
    const createdAt = fbTimeStamp.fromDate(new Date());
    try {
      await addDoc(ref, {
        uid: currentUser?.uid,
        site: value.site,
        username: value.username,
        password: value.password,
        createdAt: createdAt,
        favicon: `http://logo.clearbit.com/${value.site}`,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const deleteUserLogin = async (id: string) => {
    const userDoc = doc(fbStore, "users", id);
    try {
      await deleteDoc(userDoc);
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };
  const updateUserLogin = async (id: string, value: AddDataProps) => {
    console.log(id);
    const userDoc = doc(fbStore, "users", id);

    try {
      await updateDoc(userDoc, {
        site: value.site,
        username: value.username,
        password: value.password,
        favicon: `http://logo.clearbit.com/${value.site}`,
      });
      console.log("update successful");
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return { addUserData, deleteUserLogin, updateUserLogin };
};

import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { fbStore, fbTimeStamp } from "../../../../firebase";
import { useAuth } from "../../context/context";
import { AddDataProps } from "../../../../interfaces/vaultTypes";

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
        favicon: `http://www.google.com/s2/favicons?domain=${value.site}`,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const deleteUserLogin = async (id: string) => {
    const userDoc = doc(fbStore, "users", id);
    await deleteDoc(userDoc);
  };
  return { addUserData, deleteUserLogin };
};

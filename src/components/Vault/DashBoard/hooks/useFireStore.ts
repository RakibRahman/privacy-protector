import { collection, addDoc } from "firebase/firestore";
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
        createdAt,
        favicon: `https://${value.site}/favicon.ico`,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return { addUserData };
};

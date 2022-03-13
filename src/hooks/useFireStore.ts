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
import useToaster from "../helpers/useToaster";

export const useFireStore = () => {
  const ref = collection(fbStore, "users");

  const { currentUser } = useAuth()!;

  const { toast: addDataToast } = useToaster(
    "Log In Added Successfully",
    "",
    "success",
    "addData"
  );
  const { toast: errToast } = useToaster(
    "Operation Failed",
    "Something went wrong",
    "error",
    "addErrData"
  );

  const { toast: deleteDataToast } = useToaster(
    "Log In Deleted Successfully",
    "",
    "success",
    "deleteData"
  );

  const { toast: updateDataToast } = useToaster(
    "Login Updated Successfully",
    "",
    "success",
    "updateData"
  );

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
      addDataToast();
    } catch (e) {
      errToast();
    }
  };
  const deleteUserLogin = async (id: string) => {
    const userDoc = doc(fbStore, "users", id);
    try {
      await deleteDoc(userDoc);
      deleteDataToast();
    } catch (e) {
      errToast();
    }
  };
  const updateUserLogin = async (id: string, value: AddDataProps) => {
    const userDoc = doc(fbStore, "users", id);

    try {
      await updateDoc(userDoc, {
        site: value.site,
        username: value.username,
        password: value.password,
        favicon: `http://logo.clearbit.com/${value.site}`,
      });
      updateDataToast();
    } catch (e) {
      errToast();
    }
  };

  return { addUserData, deleteUserLogin, updateUserLogin };
};

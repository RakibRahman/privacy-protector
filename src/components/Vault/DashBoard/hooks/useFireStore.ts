import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { fbStore, fbTimeStamp } from "../../../../firebase";
import { useAuth } from "../../context/context";

export const useFireStore = () => {
  const ref = collection(fbStore, "users");

  const { currentUser } = useAuth()!;

  const addUserData = async (
    site: string,
    username: string,
    password: string
  ) => {
    if (!currentUser) return;
    const createdAt = fbTimeStamp.fromDate(new Date());
    try {
      await addDoc(ref, {
        uid: currentUser?.uid,
        site: site,
        username: username,
        password: password,
        createdAt,
        favicon: `https://${site}/favicon.ico`,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return { addUserData };
};

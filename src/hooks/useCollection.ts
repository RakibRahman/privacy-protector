import { useState, useEffect, useRef } from "react";
import { fbStore } from "../firebase";
import { getDocs, query, where, collection } from "firebase/firestore";
import { CollectionReference } from "@firebase/firestore-types";
import { CollectionProps } from "../interfaces/vaultTypes";

export const useCollection = (_query: [string, any, string]) => {
  const [userData, setUserData] = useState<CollectionProps[] | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const queryRef = useRef(_query).current;

  let ref = fbStore.collection("users");
  useEffect(() => {
    let isMounted = true;
    let ref = collection(
      fbStore,
      "users"
    ) as unknown as CollectionReference<CollectionProps>;
    if (query) {
      ref = query(
        ref,
        where(...queryRef)
      ) as unknown as CollectionReference<CollectionProps>;
    }
    const getUserData = async () => {
      try {
        if (isMounted) {
          const data = await getDocs(ref);
          setUserData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      } catch {
        setError("something went wrong / connection failed with firebase");
      } finally {
        setLoading(false);
      }
    };
    getUserData();
    return () => {
      isMounted = false;
      getUserData();
    };
  }, [ref, queryRef]);
  return { userData, error, loading };
};

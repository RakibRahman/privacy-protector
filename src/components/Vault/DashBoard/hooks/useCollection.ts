import { useState, useEffect, useRef } from "react";
import { fbStore } from "../../../../firebase";
import { getDocs, collection } from "firebase/firestore";
interface UserProps {
  id: string;
  site: string;
  password: string;
  uid: string;
  username: string;
  favicon: string;
}
interface CollectionProps {
  userData: UserProps[];
  setUserData: React.Dispatch<React.SetStateAction<any>>;
}
export const useCollection = (query: string[]) => {
  //   const ref = collection(fbStore, "users");
  let ref = fbStore.collection("users");

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<string>("");

  const _query = useRef(query);
  useEffect(() => {
    // const unsubscribe = ref.onSnapshot(
    //   (snapshot) => {
    //     let results = [] as any;
    //     snapshot.forEach((doc) => {
    //       results.push({ ...doc.data(), id: doc.id });
    //     });
    //     setUserData(results);
    //   },
    //   (error) => {
    //     setError(error.message);
    //   }
    // );
    // return () => unsubscribe();
    let isMounted = true;
    const ref = collection(fbStore, "users");
    const getUserData = async () => {
      if (isMounted) {
        const data = await getDocs(ref);
        setUserData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    };
    getUserData();
    return () => {
      isMounted = false;
      getUserData();
    };
  }, [ref]);
  return { userData, error };
};

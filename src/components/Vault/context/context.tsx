import React, { useContext, FC, useState, useEffect } from "react";
import {
  AppContextInterface,
  CurrentUser,
  UserCredentialProps,
} from "../../../interfaces/vaultTypes";

import { fbAuth } from "../../../firebase";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext<AppContextInterface | null>(null);

export function useAuth() {
  return useContext(AuthContext); //default value
}

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [refresh, setRefresh] = useState<{} | null>(null);
  const history = useHistory();

  //user sign up

  function signUp(user: UserCredentialProps) {
    return fbAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("sign up successful");
        setRefresh({});
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  // user sign out
  function signOut() {
    return fbAuth
      .signOut()
      .then(() => {
        history.push("/vault/home");
        console.log(" Sign-out successful");
      })
      .catch(() => {
        console.log("An error happened.");
      });
  }
  // user sign in
  function signIn(user: UserCredentialProps) {
    return fbAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        history.push("/vault/dashboard");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  useEffect(() => {
    let isMounted = true;
    const unsubscribe = fbAuth.onAuthStateChanged((user) => {
      if (isMounted) setCurrentUser(user);

      //stores information about current logged userPass
      setLoading(false);
    });
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const value = { currentUser, signIn, error, signUp, signOut };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

import React, { useContext, FC, useState, useEffect } from "react";
import {
  AppContextInterface,
  CurrentUser,
  UserCredentialProps,
} from "../interfaces/vaultTypes";

import { fbAuth } from "../firebase";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext<AppContextInterface | null>(null);

export function useAuth() {
  return useContext(AuthContext); //default value
}

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [netStatus, setNetStatus] = useState<string>("");

  const history = useHistory();

  //user sign up

  function signUp(user: UserCredentialProps) {
    return fbAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("sign up successful");
        history.push("/vault/dashboard");

        // window.location.reload();
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
        setError(`Error: ${error.message}`);
      });
  }

  //  update user email
  function updateUserEmail(email: string) {
    return currentUser
      .updateEmail(email)
      .then(() => {
        console.log("Email Updated");
      })
      .catch((error) => {
        alert("Log in again");
        console.log(error.message);
      });
  }

  //  update user password

  function updateUserPassword(password: string) {
    return currentUser
      .updatePassword(password)
      .then(() => {
        console.log("password update success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // reset user password
  function resetUserPassword(email: string) {
    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
        alert("password reset email sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  useEffect(() => {
    const unsubscribe = fbAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      //FIXME: memory leak issue
      //stores information about current logged userPass
      setLoading(false);
    });
    window.addEventListener("offline", (event) => {
      setNetStatus("Check your net connection!!!");
    });
    window.addEventListener("ononline", (event) => {
      setNetStatus("");
    });
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signIn,
    error,
    signUp,
    signOut,
    netStatus,
    updateUserEmail,
    updateUserPassword,
    resetUserPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

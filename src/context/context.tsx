import React, { useContext, FC, useState, useEffect } from "react";
import {
  AppContextInterface,
  CurrentUser,
  UserCredentialProps,
} from "../interfaces/vaultTypes";

import { fbAuth } from "../firebase";
import { useHistory } from "react-router-dom";
import useToaster from "../helpers/useToaster";

const AuthContext = React.createContext<AppContextInterface | null>(null);

export function useAuth() {
  return useContext(AuthContext); //default value
}

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");


  const [netStatus, setNetStatus] = useState<string>("");

  const { toast: toastReset } = useToaster(
    "Password reset link sent successfully",
    "Check your Mailbox",
    "success",
    "recoverPass"
  );

  const { toast: toastResetError } = useToaster(
    "Password reset failed",
    error,
    "error",
    "recoverErrPass"
  );

  const { toast: updateToast } = useToaster(
    "Profile Update Success",
    "Your profile has been updated successfully",
    "success",
    "updateProfile"
  );

  const { toast: updateErrorToast } = useToaster(
    "Profile Update Failed",
    error,
    "error",
    "updateErrProfile"
  );

  const { toast: loginToast } = useToaster(
    "Successfully Logged in",
    "",
    "success",
    "loginProfile"
  );

  const { toast: loginErrorToast } = useToaster(
    "Log In Failed",
    error,
    "error",
    "loginErrProfile"
  );

  const { toast: signUpToast } = useToaster(
    "Successfully Signed Up",
    "Your account is created successfully",
    "success",
    "signProfile"
  );

  const { toast: signUpErrorToast } = useToaster(
    "Signing Up Failed",
    error,
    "error",
    "signProfile"
  );

  const { toast: signOutToast } = useToaster(
    "Successfully Signed Out",
    "Your account is successfully logged out",
    "success",
    "signOut"
  );

  const { toast: signOutErrorToast } = useToaster(
    "Signing Out Failed",
    error,
    "error",
    "signOutError"
  );

  const history = useHistory();

  //user sign up

  function signUp(user: UserCredentialProps) {
    return fbAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log(user);
        signUpToast();
        history.push("/vault/dashboard");
      })
      .catch((error) => {
        setError(error.message);
        if (error) {
          signUpErrorToast();
        }
      });
  }
  // user sign out
  function signOut() {
    return fbAuth
      .signOut()
      .then(() => {
        history.push("/vault/home");
        signOutToast();
      })
      .catch((error) => {
        setError(`Error: ${error.message}`);
        if (error) {
          signOutErrorToast(error);
        }
      });
  }
  // user sign in
  function signIn(user: UserCredentialProps) {
    return fbAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        history.push("/vault/dashboard");
        loginToast();
      })
      .catch((error) => {
        setError(`Error: ${error.message}`);
        if (error) {
          loginErrorToast(error);
        }
      });
  }

  //  update user email
  function updateUserEmail(email: string) {
    return currentUser
      .updateEmail(email)
      .then(() => {
        updateToast();
      })
      .catch((error) => {
        setError(error.message);
        if (error) {
          updateErrorToast(error);
        }
      });
  }

  //  update user password

  function updateUserPassword(password: string) {
    return currentUser
      .updatePassword(password)
      .then(() => {
        updateToast();
      })
      .catch((error) => {
        setError(error.message);
        if (error) {
          updateErrorToast(error);
        }
      });
  }

  // reset user password
  function resetUserPassword(email: string) {
    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        toastReset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        if (error) {
          toastResetError();
        }
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

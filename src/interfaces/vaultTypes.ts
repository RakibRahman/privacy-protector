import firebase from "firebase/compat/app";

export type CurrentUser = firebase.User | null;
export interface UserCredentialProps {
  email: string;
  password: string;
  repeatPassword?: string;
}

export interface AppContextInterface {
  currentUser: CurrentUser;
  error: string;
  signIn: (user: UserCredentialProps) => any;
  signUp: (user: UserCredentialProps) => void;
  signOut: () => any;
}

export interface AddDataProps {
  site: string;
  username: string;
  password: string;
}
export interface CollectionProps {
  id: string;
  site: string;
  password: string;
  uid: string;
  username: string;
  favicon: string;
}
export type UserData = CollectionProps[];

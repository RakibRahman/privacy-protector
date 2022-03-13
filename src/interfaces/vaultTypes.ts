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
  netStatus: string;
  signIn: (user: UserCredentialProps) => void;
  signUp: (user: UserCredentialProps) => void;
  signOut: () => void;
  updateUserEmail: (email: string) => void;
  updateUserPassword: (password: string) => void;
  resetUserPassword: (email: string) => void;
}

export interface AddDataProps {
  site: string;
  username: string;
  password: string;
}
export interface AddProps {
  formState: AddDataProps;
  //TODO: update fn return type
  setFormState: React.Dispatch<React.SetStateAction<any>>;
}
export interface CollectionProps {
  id: string;
  site: string;
  password: string;
  uid: string;
  username: string;
  favicon: string;
  createdAt?: any;
}
export type UserData = CollectionProps[];

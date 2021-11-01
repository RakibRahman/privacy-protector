import { HandleCreatePasswordProps } from "../interfaces/types";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialLetters,
} from "./characters";
export const handleCreatePassword = (
  value: HandleCreatePasswordProps
): string => {
  let passCharacters = "";
  if (value.digits) {
    passCharacters = passCharacters + numbers;
  }
  if (value.uppercase) {
    passCharacters = passCharacters + upperCaseLetters;
  }
  if (value.lowercase) {
    passCharacters = passCharacters + lowerCaseLetters;
  }
  if (value.specialCharacters) {
    passCharacters = passCharacters + specialLetters;
  }
  return passCharacters;
};

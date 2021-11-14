import { HandleGeneratePasswordProps } from "../interfaces/generatorTypes";
import { handleCreatePassword } from "./handleCreatePassword";

import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialLetters,
} from "./characters";
export const handleGeneratePassword = (
  value: HandleGeneratePasswordProps
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
  return handleCreatePassword(passCharacters, value.passLength);
};

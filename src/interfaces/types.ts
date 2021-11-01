export interface InitialFormState {
  passLength: number;
  digits: boolean;
  uppercase: boolean;
  lowercase: boolean;
  specialCharacters: boolean;
}

export interface PasswordProps {
  generatedPassword: string;
}

export type HandleGeneratePasswordProps = {
  digits: boolean;
  uppercase: boolean;
  lowercase: boolean;
  specialCharacters: boolean;
  passLength: number;
};

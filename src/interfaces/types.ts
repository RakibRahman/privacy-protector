export interface InitialFormState {
  generatedPassword: string;
  passLength: number;
  digits: boolean;
  uppercase: boolean;
  lowercase: boolean;
  specialCharacters: boolean;
}

export interface PasswordProps {
  generatedPassword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface FormElementProps {
  formState: InitialFormState;
  setFormState: React.Dispatch<React.SetStateAction<any>>;
}
export type HandleGeneratePasswordProps = {
  digits: boolean;
  uppercase: boolean;
  lowercase: boolean;
  specialCharacters: boolean;
  passLength: number;
};

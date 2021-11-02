import * as React from "react";
import { Password } from "./Password";
import { SliderComponent } from "./formElements/Slider";
import { Letters } from "./formElements/Letters";
import { Digits } from "./formElements/Digits";
import { SpecialCharacters } from "./formElements/SpecialCharacters";
import { handleGeneratePassword } from "../helpers/handleGeneratePassword";
import { InitialFormState } from "../interfaces/types";
import { Box, Button } from "@chakra-ui/react";
import useToaster from "../helpers/useToaster";

export const Form: React.FC = () => {
  const initialFormState = {
    generatedPassword: "",
    passLength: 20,
    digits: true,
    uppercase: true,
    lowercase: true,
    specialCharacters: true,
  };
  const { toast } = useToaster("Password created.", "Keep your password safe");

  const [formState, setFormState] =
    React.useState<InitialFormState>(initialFormState);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !formState.digits &&
      !formState.uppercase &&
      !formState.lowercase &&
      !formState.specialCharacters
    ) {
      console.log("must select one option");
    }

    const finalPassword = handleGeneratePassword(formState);
    setFormState({ ...formState, generatedPassword: finalPassword });
    console.log(formState.generatedPassword.length);
    toast();
  };
  return (
    <Box>
      <form onSubmit={submitHandler}>
        <Password
          generatedPassword={formState.generatedPassword}
          onChange={onChangeHandler}
        />
        <SliderComponent formState={formState} setFormState={setFormState} />
        <Letters formState={formState} onChange={onChangeHandler} />
        <Digits formState={formState} onChange={onChangeHandler} />
        <SpecialCharacters formState={formState} onChange={onChangeHandler} />

        <Button type="submit">Generate Password</Button>
      </form>
    </Box>
  );
};

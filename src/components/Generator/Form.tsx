import React from "react";
import { Indicator } from "./indicator/Indicator";
import { Password } from "./Password";
import { SliderComponent } from "./formElements/Slider";
import { Letters } from "./formElements/Letters";
import { Digits } from "./formElements/Digits";
import { SpecialCharacters } from "./formElements/SpecialCharacters";
import { handleGeneratePassword } from "../../helpers/handleGeneratePassword";
import { InitialFormState } from "../../interfaces/generatorTypes";
import { Box, Button } from "@chakra-ui/react";
import useToaster from "../../helpers/useToaster";

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
  const { toast: toastError } = useToaster(
    "Password Not Created.",
    "Must Select At least One Option"
  );

  const [formState, setFormState] =
    React.useState<InitialFormState>(initialFormState);
  const [finalPassword, setFinalPassword] = React.useState<string>("");

  React.useEffect(() => {
    const _finalPassword = handleGeneratePassword(formState);
    setFinalPassword(_finalPassword);
  }, [formState]);

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
      toastError({ status: "error" });
    }
    setFormState({ ...formState, generatedPassword: finalPassword });

    if (formState.generatedPassword.length >= 8) {
      toast();
    }
  };
  return (
    <form onSubmit={submitHandler} className="formGenerator">
      <Indicator password={formState.generatedPassword} />
      <Box>
        <Password
          generatedPassword={formState.generatedPassword}
          onChange={onChangeHandler}
        />
        <SliderComponent formState={formState} setFormState={setFormState} />
        <Letters formState={formState} onChange={onChangeHandler} />
        <Digits formState={formState} onChange={onChangeHandler} />
        <SpecialCharacters formState={formState} onChange={onChangeHandler} />
      </Box>

      <Button
        _hover={{
          background: "white",
          color: "teal.500",
        }}
        type="submit"
        bg="#1BAF72"
        color="#ffffff"
        fontSize="20px"
        letterSpacing="1px"
      >
        Generate Password
      </Button>
    </form>
  );
};

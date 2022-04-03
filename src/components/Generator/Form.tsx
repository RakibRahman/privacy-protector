import React from "react";
import { Indicator } from "./indicator/Indicator";
import Password from "./Password";
import SliderComponent from "./formElements/Slider";
import { Letters } from "./formElements/Letters";
import Digits from "./formElements/Digits";
import SpecialCharacters from "./formElements/SpecialCharacters";
import { handleGeneratePassword } from "../../helpers/handleGeneratePassword";
import { InitialFormState } from "../../interfaces/generatorTypes";
import { Box, Button, Flex } from "@chakra-ui/react";
import useToaster from "../../helpers/useToaster";
import { useTheme } from "../../context/themeContext";

export const Form: React.FC = () => {
  const { color, bg } = useTheme()!;
  const initialFormState = {
    generatedPassword: "",
    passLength: 10,
    digits: true,
    uppercase: false,
    lowercase: true,
    specialCharacters: false,
  };

  const { toast } = useToaster(
    "Password created.",
    "Keep your password safe",
    "success",
    "rakib"
  );

  const { toast: toastError } = useToaster(
    "Password Not Created.",
    "Must Select At least One Option",
    "error",
    "pain"
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
      if (!toastError.isActive("pain")) {
        toastError();
      }
    }
    if (
      formState.digits ||
      formState.uppercase ||
      formState.lowercase ||
      formState.specialCharacters
    ) {
      setFormState({ ...formState, generatedPassword: finalPassword });
      if (!toast.isActive("rakib")) {
        toast();
      }
    }
  };

  React.useEffect(() => {}, [finalPassword]);

  return (
    <form onSubmit={submitHandler}>
      <Flex flexDirection="column" gridGap="5px">
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
            background: "none",
            color: "teal.500",
          }}
          type="submit"
          // bg="#1BAF72"
          colorScheme={color}
          fontSize="20px"
          variant="outline"
          letterSpacing="1px"
        >
          Generate Password
        </Button>
      </Flex>
    </form>
  );
};

import * as React from "react";
import { Password } from "./Password";
import { handleGeneratePassword } from "../helpers/handleGeneratePassword";

import { InitialFormState } from "../interfaces/types";
import {
  Box,
  FormLabel,
  Input,
  Button,
  Text,
  Checkbox,
  FormControl,
} from "@chakra-ui/react";

export const Form: React.FC = () => {
  const initialFormState = {
    generatedPassword: "",
    passLength: 8,
    digits: true,
    uppercase: true,
    lowercase: true,
    specialCharacters: true,
  };
  const [formState, setFormState] =
    React.useState<InitialFormState>(initialFormState);

  const [generatedPassword, setGeneratedPassword] = React.useState<string>("");

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
    setGeneratedPassword(finalPassword);
  };
  return (
    <Box>
      <Box>
        <Password generatedPassword={generatedPassword} />
        <form onSubmit={submitHandler}>
          <FormControl>
            <FormLabel display="flex" align="center" justify="center">
              <Input
                type="range"
                w="1/2"
                value={formState.passLength}
                name="passLength"
                onChange={onChangeHandler}
              />
              <Text>{formState.passLength}</Text>
              <Text>Password Length</Text>
            </FormLabel>
          </FormControl>
          <FormControl display="flex">
            <FormLabel>
              <Checkbox
                colorScheme="green"
                name="digits"
                defaultChecked={formState.digits}
                onChange={onChangeHandler}
              >
                Digits
              </Checkbox>
            </FormLabel>

            <Text>(0..9)</Text>
          </FormControl>
          <FormControl display="flex">
            <FormLabel>
              <Checkbox
                colorScheme="green"
                name="uppercase"
                defaultChecked={formState.uppercase}
                onChange={onChangeHandler}
              >
                Upper Case
              </Checkbox>
            </FormLabel>

            <Text>(A..Z)</Text>
          </FormControl>
          <FormControl display="flex">
            <FormLabel>
              <Checkbox
                colorScheme="green"
                name="lowercase"
                defaultChecked={formState.lowercase}
                onChange={onChangeHandler}
              >
                Lower Case
              </Checkbox>
            </FormLabel>

            <Text>(a..z)</Text>
          </FormControl>
          <FormControl display="flex">
            <FormLabel>
              <Checkbox
                colorScheme="green"
                name="specialCharacters"
                defaultChecked={formState.specialCharacters}
                onChange={onChangeHandler}
              >
                Special Characters
              </Checkbox>
            </FormLabel>

            <Text>(~`@#$*...)</Text>
          </FormControl>

          <Button type="submit">Generate Password</Button>
        </form>
        <Box>{formState.digits}</Box>
      </Box>
    </Box>
  );
};

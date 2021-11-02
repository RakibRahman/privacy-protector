import * as React from "react";
import { Password } from "./Password";
import { SliderComponent } from "./formElements/Slider";
import { handleGeneratePassword } from "../helpers/handleGeneratePassword";

import { InitialFormState } from "../interfaces/types";
import {
  Box,
  FormLabel,
  Button,
  Text,
  Checkbox,
  FormControl,
  Flex,
} from "@chakra-ui/react";

export const Form: React.FC = () => {
  const initialFormState = {
    generatedPassword: "",
    passLength: 20,
    digits: true,
    uppercase: true,
    lowercase: true,
    specialCharacters: true,
  };
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
  };
  return (
    <Box>
      <Box>
        <form onSubmit={submitHandler}>
          <Password
            generatedPassword={formState.generatedPassword}
            onChange={onChangeHandler}
          />
          <Flex>
            <SliderComponent
              formState={formState}
              setFormState={setFormState}
            />
          </Flex>
          <Flex>
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
          </Flex>
          <Flex>
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
          </Flex>
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
          <Flex>
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
          </Flex>

          <Button type="submit">Generate Password</Button>
        </form>
        <Box>{formState.digits}</Box>
      </Box>
    </Box>
  );
};

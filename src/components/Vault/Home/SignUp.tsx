import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  FormLabel,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useAuth } from "../../../context/context";

import { UserCredentialProps } from "../../../interfaces/vaultTypes";
import Spinner from "../../../assets/spinner.svg";

const SignUp = () => {
  const initFormValues = {
    email: "",
    password: "",
    repeatPassword: "",
  };
  const { error, signUp, netStatus } = useAuth()!;

  const [formState, setFormState] =
    useState<UserCredentialProps>(initFormValues);

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.password.match(formState.repeatPassword)) {
      alert("Please enter matching password");
      return;
    }
    try {
      setLoading(true);
      await signUp(formState);
    } catch {
      alert("invalid sign up data");
      console.log("sign up failed");
    } finally {
      setLoading(false);
      console.log("sign up success");
    }
  };
  return (
    <Box>
      <Heading color="#f5f5f5">Sign Up</Heading>
      <form onSubmit={onSubmit}>
        <Flex w="100%" flexDirection="column" gridGap="3" color="#f5f5f5">
          <Text color="hotpink">{error}</Text>
          <Text color="#f14"> {netStatus}</Text>

          {loading && (
            <Box color="#1AB188" w="10" h="10" mx="auto">
              <Image src={Spinner} alt="Loading..." />
            </Box>
          )}

          <FormLabel>
            <Text my="1"> Email:</Text>
            <Input
              placeholder="Email Address"
              name="email"
              value={formState.email}
              onChange={onChangeHandler}
            />
          </FormLabel>
          <FormLabel>
            <Text my="1">Password:</Text>

            <Input
              placeholder="Your Password"
              name="password"
              value={formState.password}
              onChange={onChangeHandler}
            />
          </FormLabel>
          <FormLabel>
            <Text my="1">Repeat Password:</Text>

            <Input
              placeholder="Repeat Password"
              name="repeatPassword"
              value={formState.repeatPassword}
              onChange={onChangeHandler}
            />
          </FormLabel>

          <Button
            type="submit"
            colorScheme="#1AB188"
            variant="outline"
            w="100%"
            fontSize="1.5rem"
          >
            Sign Up
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
export default SignUp;

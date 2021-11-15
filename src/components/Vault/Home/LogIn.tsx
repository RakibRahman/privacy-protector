import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  FormLabel,
  Input,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import { useAuth } from "./../context/context";
import { Link as RouterLink } from "react-router-dom";
import { UserCredentialProps } from "../../../interfaces/vaultTypes";

export const LogIn = () => {
  const initFormValues = {
    email: "admin@gmail.com",
    password: "admin123",
  };
  const clearFormValues = {
    email: "",
    password: "",
  };
  const { signIn, error } = useAuth()!;

  // exclamation mark (!) after the call to the useAuth hook to tell the TypeScript compiler that its return value won’t be undefined.

  const [formState, setFormState] =
    useState<UserCredentialProps>(initFormValues);

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn(formState);
    } catch {
      alert("invalid data");
      console.log("log in failed");
    } finally {
      setLoading(false);
      console.log("success");
    }
  };
  return (
    <Box>
      <Heading>Welcome Back</Heading>
      <Text color="#f14"> {error}</Text>
      {loading && <Text color="#1AB188">Logging..</Text>}
      <form onSubmit={onSubmit}>
        <Flex w="100%" flexDirection="column" gridGap="3">
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
          <Link as={RouterLink} to="/vault/dashboard">
            Password Forgotten?
          </Link>
          <Text cursor="pointer" onClick={() => setFormState(clearFormValues)}>
            Clear Fields
          </Text>
          <Button type="submit" bg="#1AB188" w="100%" fontSize="1.5rem">
            Log In
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

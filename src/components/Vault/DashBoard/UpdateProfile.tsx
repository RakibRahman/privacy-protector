import React, { useState } from "react";
import {
  Flex,
  Box,
  Input,
  FormLabel,
  Button,
  Heading,
  useBoolean,
} from "@chakra-ui/react";
import { ShowPassword } from "./ShowPassword";
import { UserCredentialProps } from "../../../interfaces/vaultTypes";
import { useAuth } from "../../../context/context";
import { Link as RouterLink, useHistory } from "react-router-dom";

export const UpdateProfile = React.memo(() => {
  const { currentUser, updateUserEmail, updateUserPassword, signOut } =
    useAuth();
  const history = useHistory();
  const initValues = {
    email: currentUser?.email,
    password: "",
    repeatPassword: "",
  };

  const [formState, setFormState] = useState<UserCredentialProps>(initValues);
  const [flag, setFlag] = useBoolean();

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
      await updateUserEmail(formState.email);
      await updateUserPassword(formState.password);
    } catch {
      signOut();
      setTimeout(() => {
        history.push("/vault/home");
      }, 2000);
    } finally {
      history.push("/vault/dashboard");
    }
  };

  return (
    <Box
      color="#a9b8c9"
      textAlign="center"
      w={{ sm: "100%", lg: "50%" }}
      mx="auto"
      my="10"
      px="4"
    >
      <Heading>Update Profile</Heading>

      <form onSubmit={onSubmit}>
        <Flex w="100%" flexDirection="column" gridGap="3">
          <FormLabel>
            Email:
            <Input
              my="1"
              type="email"
              placeholder="Email Address"
              name="email"
              value={formState.email}
              onChange={onChangeHandler}
            />
          </FormLabel>
          <FormLabel>
            Password:
            <Input
              my="1"
              type={flag ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={onChangeHandler}
            />
          </FormLabel>
          <FormLabel>
            Confirm Password:
            <Input
              my="1"
              type={flag ? "text" : "password"}
              placeholder="Repeat Password"
              name="repeatPassword"
              value={formState.repeatPassword}
              onChange={onChangeHandler}
            />
          </FormLabel>

          <ShowPassword flag={flag} setFlag={() => setFlag.toggle()} />

          <Button
            type="submit"
            bg="#1AB188"
            w="100%"
            fontSize="1.5rem"
            _hover={{
              opacity: 0.8,
            }}
          >
            Update
          </Button>
          <RouterLink to="/vault/dashboard">Return to DashBoard</RouterLink>
        </Flex>
      </form>
    </Box>
  );
});

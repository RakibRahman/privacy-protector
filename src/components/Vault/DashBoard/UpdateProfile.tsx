import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Input,
  FormLabel,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { UserCredentialProps } from "../../../interfaces/vaultTypes";
import { useAuth } from "../../../context/context";
import { Link as RouterLink } from "react-router-dom";

export const UpdateProfile = React.memo(() => {
  const { currentUser } = useAuth();
  const initValues = {
    email: currentUser?.email,
    password: "",
    repeatPassword: "",
  };

  const [formState, setFormState] = useState<UserCredentialProps>(initValues);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
    } catch {
    } finally {
      console.log(formState);
    }
  };
  return (
    <Box color="#ffffff">
      <Heading>Update Profile</Heading>

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
              required
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={onChangeHandler}
            />
          </FormLabel>
          <FormLabel>
            <Text my="1">Confirm Password:</Text>
            <Input
              required
              placeholder="Repeat Password"
              name="password"
              value={formState.repeatPassword}
              onChange={onChangeHandler}
            />
          </FormLabel>

          <RouterLink to="/vault/dashboard">Return to DashBoard</RouterLink>

          <Button type="submit" bg="#1AB188" w="100%" fontSize="1.5rem">
            Update
          </Button>
        </Flex>
      </form>
    </Box>
  );
});

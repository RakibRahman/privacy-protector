import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Input,
  FormLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { AddDataProps } from "../../../interfaces/vaultTypes";
import { useFireStore } from "./hooks/useFireStore";

export const AddData = () => {
  const initFormValues = {
    site: "",
    username: "",
    password: "",
  };

  //   const { error, signUp } = useAuth()!;
  const { addUserData } = useFireStore();
  const [formState, setFormState] = useState<AddDataProps>(initFormValues);
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(formState));
    open();

    await addUserData(formState);
    setFormState(initFormValues);
  };
  return (
    <Flex fontSize="1.8rem" mx="auto" align="center" justify="center">
      <Popover
        placement="right-end"
        isOpen={isOpen}
        returnFocusOnClose={false}
        onClose={close}
      >
        <PopoverTrigger>
          <Button
            bg="hotpink"
            color="#fff"
            fontSize="16"
            onClick={open}
            w="8rem"
          >
            <Text>Add New Login</Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg="#ffffff"
          w={{ base: "300px", md: "400px" }}
          color="#000000"
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Enter Following Information</PopoverHeader>
          <PopoverBody>
            <form onSubmit={onSubmit}>
              <Flex w="100%" flexDirection="column" gridGap="3">
                {/* <Text>{error}</Text> */}
                <FormLabel>
                  <Text my="1"> Site URL:</Text>
                  <Input
                    placeholder="Website Address"
                    name="site"
                    value={formState.site}
                    onChange={onChangeHandler}
                  />
                </FormLabel>
                <FormLabel>
                  <Text my="1">Username:</Text>

                  <Input
                    placeholder="Your Username or email"
                    name="username"
                    value={formState.username}
                    onChange={onChangeHandler}
                  />
                </FormLabel>
                <FormLabel>
                  <Text my="1">Password:</Text>

                  <Input
                    placeholder="Password"
                    name="password"
                    value={formState.password}
                    onChange={onChangeHandler}
                  />
                </FormLabel>

                <Button type="submit" bg="#1AB188" w="100%" fontSize="1.5rem">
                  Save
                </Button>
              </Flex>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

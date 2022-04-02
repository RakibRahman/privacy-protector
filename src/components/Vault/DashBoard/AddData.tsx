import React, { useState } from "react";
import {
  Button,
  Input,
  FormLabel,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AddDataProps } from "../../../interfaces/vaultTypes";
import { useFireStore } from "../../../hooks/useFireStore";

export const AddData = () => {
  const initFormValues = {
    site: "",
    username: "",
    password: "",
  };

  const { addUserData } = useFireStore();
  const [formState, setFormState] = useState<AddDataProps>(initFormValues);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.username || !formState.password) {
      alert("Must be a valid username or password");
    }
    await addUserData(formState);
    setFormState(initFormValues);
    onClose();
  };
  return (
    <Flex fontSize="1.8rem" mx="auto" align="center" justify="center">
      <Button
        bg="#2B4141"
        color="#ffffff"
        fontSize="16"
        w="8rem"
        _hover={{
          opacity: 0.7,
          transform: "scale(1.03)",
        }}
        onClick={onOpen}
      >
        Add Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="#2B4141" color="#f5f5f5">
          <ModalHeader>Add New Login Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSubmit}>
              <Flex w="100%" flexDirection="column" gridGap="3">
                {/* <Text>{error}</Text> */}
                <FormLabel>
                  <Text my={1} fontWeight="bold">
                    Website:
                  </Text>
                  <Input
                    placeholder="Website Address"
                    name="site"
                    value={formState.site}
                    onChange={onChangeHandler}
                  />
                </FormLabel>
                <FormLabel>
                  <Text my={1} fontWeight="bold">
                    Username:
                  </Text>

                  <Input
                    placeholder="Your Username or email"
                    name="username"
                    value={formState.username}
                    onChange={onChangeHandler}
                  />
                </FormLabel>
                <FormLabel>
                  <Text my={1} fontWeight="bold">
                    Password:
                  </Text>

                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formState.password}
                    onChange={onChangeHandler}
                  />
                </FormLabel>

                <Button
                  type="submit"
                  colorScheme="green"
                  w="100%"
                  fontSize="1.5rem"
                  variant="outline"
                >
                  Save
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export const MemoizedAddData = React.memo(AddData);

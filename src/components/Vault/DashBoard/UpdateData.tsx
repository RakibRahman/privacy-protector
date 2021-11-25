import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Button,
  useDisclosure,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { AddDataProps } from "../../../interfaces/vaultTypes";
import { useFireStore } from "./hooks/useFireStore";
import { CollectionProps } from "../../../interfaces/vaultTypes";

const UpdateData: React.FC<{ login: CollectionProps }> = ({ login }) => {
  const initFormValues = {
    site: login.site,
    username: login.username,
    password: login.password,
  };

  const { updateUserLogin } = useFireStore();
  const [formState, setFormState] = useState<AddDataProps>(initFormValues);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await updateUserLogin(login.id, formState);
    setFormState(initFormValues);
    onClose();

    // window.location.reload();
  };
  return (
    <Flex fontSize="1.8rem">
      <Button bg="#23B179" color="#fff" fontSize="16" w="8rem" onClick={onOpen}>
        <Text>Update</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Login Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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

                <Flex justify="center" gridGap="3">
                  <Button
                    type="submit"
                    bg="#1AB188"
                    color="#ffffff"
                    fontSize="1.5rem"
                    _hover={{
                      background: "white",
                      color: "teal.500",
                    }}
                  >
                    Save
                  </Button>
                  <Button colorScheme="blue" onClick={onClose}>
                    Close
                  </Button>
                </Flex>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
export default React.memo(UpdateData);

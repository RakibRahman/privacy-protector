import React, { useState } from "react";
import {
  Box,
  Input,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Flex,
  Text,
  Image,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { CollectionProps } from "../../../interfaces/vaultTypes";
import { Link } from "react-router-dom";
import { useFireStore } from "../../../hooks/useFireStore";

import {
  FcGlobe,
  FcKey,
  FcReading,
  FcAbout,
  FcInspection,
} from "react-icons/fc";


import { AddDataProps } from "../../../interfaces/vaultTypes";

const UserDetail: React.FC<{ login: CollectionProps }> = ({ login }) => {
  const initFormValues = {
    site: login.site,
    username: login.username,
    password: login.password,
  };

  const { deleteUserLogin, updateUserLogin } = useFireStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formState, setFormState] = useState<AddDataProps>(initFormValues);
  const [loading, setLoading] = useState<boolean>(false);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      await updateUserLogin(login.id, formState);
    } catch {
      console.log("Something Went Wrong");
    } finally {
      setFormState(initFormValues);
      onClose();
      setLoading(false);
    }
    // window.location.reload();
  };

  return (
    <>
      <Box
        mx="auto"
        w="300px"
        flex="1"
        textAlign="left"
        onClick={onOpen}
        bg="#22AE77"
        color="#ffffff"
        p="3"
        cursor="pointer"
        borderRadius="5px"
        className="card"
      >
        <Image
          w="4rem"
          h="4rem"
          borderRadius="5px"
          mx="auto"
          objectFit="cover"
          src={login.favicon}
          alt="🔗"
        />

        <Heading size="md" letterSpacing="1px">
          {login.site.replace(/.+\/\/|www.|\..+/g, "")}
        </Heading>
        <Text fontWeight="bold" letterSpacing="1px">
          {login.username}
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSubmit}>
              <Stack spacing={4}>
                <FormLabel>
                  <Text my="1"> Site URL:</Text>
                  <Input
                    placeholder="Website Address"
                    name="site"
                    value={formState.site}
                    onChange={onChangeHandler}
                  />
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FcGlobe color="gray.300" />}
                  />
                  <Input type="tel" placeholder="Phone number" />
                  <InputRightElement
                    onClick={()=>console.log('ok')}
                    children={<FcInspection color="green.500" />}
                  />
                </InputGroup>
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
              </Stack>

              <Flex gridGap="4" align="center">
                <FcAbout fontSize="2.5rem" />
                <Box>
                  <Text fontWeight="bold" letterSpacing="1px">
                    Created At:
                  </Text>
                  <Text>{login.createdAt.toDate().toDateString()}</Text>
                </Box>
              </Flex>
              <Stack align="center" justify="center">
                <Button
                  bg="#C73636"
                  color="white"
                  mx="1"
                  onClick={() => deleteUserLogin(login.id)}
                  _hover={{
                    opacity: 0.7,
                    transform: "scale(1.03)",
                  }}
                >
                  Delete
                </Button>
                <Button
                  isLoading={loading}
                  loadingText="Saving..."
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
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default React.memo(UserDetail);

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
  useClipboard,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";
import { CollectionProps } from "../../../interfaces/vaultTypes";
import { useFireStore } from "../../../hooks/useFireStore";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useToaster from "../../../helpers/useToaster";

import {
  FcGlobe,
  FcKey,
  FcReading,
  FcAbout,
  FcInspection,
} from "react-icons/fc";

import { AddDataProps } from "../../../interfaces/vaultTypes";

const UserDetail: React.FC<{ login: CollectionProps }> = ({ login }) => {

  const bg = useColorModeValue("#f5f5f5", "#2B4141");
  const color = useColorModeValue("#2B4141", "#f5f5f5");
  const initFormValues = {
    site: login.site,
    username: login.username,
    password: login.password,
  };

  const { deleteUserLogin, updateUserLogin } = useFireStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formState, setFormState] = useState<AddDataProps>(initFormValues);
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const [value, setValue] = useState<string>("");
  const { onCopy } = useClipboard(value);

  const handlePassToggle = () => setShow(!show);

  const { toast } = useToaster("Copied", "", "success", "copyLogin");

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
        px={3}
        py={5}
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered size='sm'>
        <ModalOverlay />
        <ModalContent bg={bg} color={color}>
          <ModalHeader>Login Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSubmit}>
              <Stack spacing={4}>
                <FormLabel>
                  <Text mb={1} fontWeight="bold">
                    Site:
                  </Text>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FcGlobe color="gray.300" />}
                    />
                    <Input
                      type="text"
                      placeholder="Website Address"
                      name="site"
                      value={formState.site}
                      onChange={onChangeHandler}
                    />
                    <InputRightElement>
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() => {
                          setValue(formState.site);
                          onCopy();
                          if (!toast.isActive("copyLogin")) {
                            toast();
                          }
                        }}
                      >
                        <FcInspection color="green.500" />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormLabel>
                <FormLabel>
                  <Text my={1} fontWeight="bold">
                    Username:
                  </Text>

                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FcReading color="gray.300" />}
                    />
                    <Input
                      placeholder="Your Username or email"
                      name="username"
                      value={formState.username}
                      onChange={onChangeHandler}
                    />
                    <InputRightElement>
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() => {
                          setValue(formState.username);
                          onCopy();
                          if (!toast.isActive("copyLogin")) {
                            toast();
                          }
                        }}
                      >
                        <FcInspection color="green.500" />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormLabel>
                <FormLabel>
                  <Text my={1} fontWeight="bold">
                    Password:
                  </Text>

                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FcKey color="gray.300" />}
                    />

                    <Input
                      placeholder="Password"
                      name="password"
                      type={show ? "text" : "password"}
                      value={formState.password}
                      onChange={onChangeHandler}
                    />
                    <InputRightElement>
                      <Text
                        cursor="pointer"
                        fontSize="xs"
                        mr="5px"
                        onClick={handlePassToggle}
                      >
                        {show ? (
                          <AiFillEyeInvisible fontSize="1.5rem" />
                        ) : (
                          <AiFillEye fontSize="1.5rem" />
                        )}
                      </Text>
                      <Button
                        mr="30px"
                        h="1.75rem"
                        size="md"
                        onClick={() => {
                          setValue(formState.password);
                          onCopy();
                          if (!toast.isActive("copyLogin")) {
                            toast();
                          }
                        }}
                      >
                        <FcInspection color="green.500" />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormLabel>
              </Stack>

              <Flex gridGap="4" align="center" mt={3}>
                <FcAbout fontSize="2.5rem" />
                <Box>
                  <Text fontWeight="bold" letterSpacing="1px">
                    Created At:
                  </Text>
                  <Text>{login.createdAt.toDate().toDateString()}</Text>
                </Box>
              </Flex>
              <Flex align="center" justify="flex-end">
                <Button
                  disabled={loading}
                  bg="#C73636"
                  variant='outline'
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
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default React.memo(UserDetail);

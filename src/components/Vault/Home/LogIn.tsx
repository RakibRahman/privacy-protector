import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  FormLabel,
  Input,
  Heading,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../../../context/context";
import { UserCredentialProps } from "../../../interfaces/vaultTypes";
import Spinner from "../../../assets/spinner.svg";
import { ResetPassword } from "./ResetPassword";

export const LogIn = () => {
  const initFormValues = {
    email: "super.admin@gmail.com",
    password: "@superadmin#",
  };
  const clearFormValues = {
    email: "",
    password: "",
  };
  const { signIn, error, netStatus } = useAuth()!;
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      console.log("log in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Heading color="#f5f5f5">Welcome Back</Heading>
      <Text color="#f14"> {error}</Text>
      <Text color="#f14"> {netStatus}</Text>
      {loading && (
        <Box color="#1AB188" w="10" h="10">
          <Image src={Spinner} alt="Loading..." />
        </Box>
      )}
      <form onSubmit={onSubmit}>
        <Flex w="100%" flexDirection="column" gridGap="3" color="#f5f5f5">
          <FormLabel>
            <Text my="1"> Email:</Text>
            <Input
              required
              placeholder="Email Address"
              name="email"
              value={formState.email}
              onChange={onChangeHandler}
            />
          </FormLabel>
          <FormLabel>
            <Text my="1">Password:</Text>

            <Input
              type="password"
              required
              autoComplete="on"
              placeholder="Your Password"
              name="password"
              value={formState.password}
              onChange={onChangeHandler}
            />
          </FormLabel>
          <Text onClick={onOpen} cursor="pointer" fontWeight="bold">
            Password Forgotten?
          </Text>
          <Text cursor="pointer" onClick={() => setFormState(clearFormValues)}>
            Clear Fields
          </Text>
          <Button type="submit" colorScheme="#1AB188" variant='outline' w="100%" fontSize="1.5rem" _hover={{bg:'none'}}>
            Log In
          </Button>
        </Flex>
      </form>
   
        <Modal isOpen={isOpen} onClose={onClose} isCentered size='sm'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Recover Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ResetPassword onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
 
    </Box>
  );
};

import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useAuth } from "../../../context/context";

export const ResetPassword: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const { resetUserPassword, error, netStatus } = useAuth()!;
  const [email, setEmail] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      resetUserPassword(email);
    } catch {
      console.log(error);
    } finally {
      onClose();
    }
  };

  return (
    <Box fontSize="1rem">
      <Heading size="lg">Don't Worry!</Heading>
      <form onSubmit={onSubmit}>
        <Heading size="md">
          Just provide your email and we can do the rest 😁
        </Heading>
        <Box>
          <Text color="#f14"> {error}</Text>
          <Text color="#f14"> {netStatus}</Text>
        </Box>
        <FormControl my={3}>
          <FormLabel>
            <Text my={1} fontSize="1.5rem">
              Email:
            </Text>
            <Input
              required
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormLabel>
        </FormControl>

        <Button
          letterSpacing="2px"
          type="submit"
          bg="#1AB188"
          w="100%"
          fontSize="1.5rem"
          color="#ffffff"
        >
          Submit
        </Button>
      </form>

      <Text textAlign="center" my={3} fontSize="1.5rem">
        Did you remember?
        <Text
          cursor="pointer"
          as="span"
          color="#1AB188"
          onClick={onClose}
          fontWeight="bold"
        >
          {" "}
          Sign In
        </Text>
      </Text>
    </Box>
  );
};

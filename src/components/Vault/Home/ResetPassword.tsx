import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Image,
} from "@chakra-ui/react";
import { useAuth } from "../../../context/context";
import Spinner from "../../../assets/spinner.svg";

export const ResetPassword: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const { resetUserPassword, error, netStatus } = useAuth()!;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetUserPassword(email);
  };

  return (
    <Box fontSize="1rem">
      <Heading>Don't Worry!</Heading>
      <form onSubmit={onSubmit}>
        <Heading as="h4">
          Just provide your email
          <br />
          and we can do the rest
        </Heading>
        <Box>
          <Text color="#f14"> {error}</Text>
          <Text color="#f14"> {netStatus}</Text>
          {loading && (
            <Box color="#1AB188" w="10" h="10">
              <Image src={Spinner} alt="Loading..." />
            </Box>
          )}
        </Box>
        <FormControl>
          <FormLabel>
            <Text my="1">Email:</Text>
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
          type="submit"
          bg="#1AB188"
          w="100%"
          fontSize="1.5rem"
          color="#ffffff"
        >
          Next
        </Button>
      </form>

      <Text textAlign="center" my={3} fontSize="1.5rem">
        Did you remember?
              <Text as="span" color="#1AB188" onClick={onClose} fontWeight="bold">
                  {" "}
          Sign In
        </Text>
      </Text>
    </Box>
  );
};

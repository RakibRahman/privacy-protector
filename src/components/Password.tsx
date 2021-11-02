import * as React from "react";
import {
  Flex,
  Button,
  Spacer,
  Text,
  useClipboard,
  Input,
} from "@chakra-ui/react";
import { PasswordProps } from "../interfaces/types";

export const Password: React.FC<PasswordProps> = ({
  generatedPassword,
  onChange,
}) => {
  const { hasCopied, onCopy } = useClipboard(generatedPassword);
  return (
    <Flex my="5px" align="center" justify="center">
      <Input
        type="text"
        w="70%"
        minH="50px"
        border="1px solid #fff"
        borderRadius="xl"
        p="2"
        value={generatedPassword}
        onChange={onChange}
        name="generatedPassword"
      />

      <Spacer />
      <Button
        borderRadius="xl"
        onClick={onCopy}
        w="150px"
        textAlign="center"
        color={hasCopied ? "red" : "black"}
      >
        {hasCopied ? "Copied" : "Copy to clipboard"}
      </Button>
    </Flex>
  );
};

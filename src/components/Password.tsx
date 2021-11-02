import * as React from "react";
import { Flex, Button, Spacer, useClipboard, Input } from "@chakra-ui/react";
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
        minH="40px"
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
        minH="40px"
        textAlign="center"
        color={hasCopied ? "white" : "black"}
        background={hasCopied ? "#c334d9" : "white"}
      >
        {hasCopied ? "Copied" : "Copy to Clipboard"}
      </Button>
    </Flex>
  );
};

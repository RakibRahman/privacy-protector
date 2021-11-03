import * as React from "react";
import {
  Flex,
  Button,
  Spacer,
  useClipboard,
  Input,
  useToast,
} from "@chakra-ui/react";

import { PasswordProps } from "../interfaces/types";
import useToaster from "../helpers/useToaster";
export const Password: React.FC<PasswordProps> = ({
  generatedPassword,
  onChange,
}) => {
  const { hasCopied, onCopy } = useClipboard(generatedPassword);
  const { toast } = useToaster("Password copied", "Keep your password safe");

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
        onClick={() => {
          onCopy();
          toast();
        }}
        w="150px"
        minH="40px"
        textAlign="center"
        color={hasCopied ? "#fdc51a" : "white"}
        background={hasCopied ? "#c334d9" : "#cb4e00"}
      >
        {hasCopied ? "Copied" : "Copy to Clipboard"}
      </Button>
    </Flex>
  );
};

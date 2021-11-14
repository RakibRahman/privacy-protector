import * as React from "react";
import { Flex, Button, Spacer, useClipboard, Input } from "@chakra-ui/react";

import { PasswordProps } from "../../interfaces/generatorTypes";
import useToaster from "../../helpers/useToaster";
export const Password: React.FC<PasswordProps> = ({
  generatedPassword,
  onChange,
}) => {
  const { hasCopied, onCopy } = useClipboard(generatedPassword);
  const { toast } = useToaster("Password copied", "Keep your password safe");

  return (
    <Flex
      my="5px"
      align="center"
      justify="center"
      flexDirection="column"
      gridGap="2"
    >
      <Input
        focusBorderColor="#1BAF72"
        type="text"
        w="100%"
        minH="40px"
        p="2"
        value={generatedPassword}
        onChange={onChange}
        name="generatedPassword"
      />

      <Spacer />
      <Button
        _hover={{
          background: "white",
          color: "teal.500",
        }}
        cursor="copy"
        borderRadius="xl"
        onClick={async () => {
          await onCopy();
          await toast();
        }}
        w="160px"
        textAlign="center"
        color={hasCopied ? "#fdc51a" : "white"}
        background={hasCopied ? "#008050" : "#cb4e00"}
      >
        {hasCopied ? "Copied" : "Copy to Clipboard"}
      </Button>
    </Flex>
  );
};

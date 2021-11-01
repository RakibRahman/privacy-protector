import * as React from "react";
import { Flex, Button, Spacer, Text, useClipboard } from "@chakra-ui/react";
import { PasswordProps } from "../interfaces/types";

export const Password: React.FC<PasswordProps> = ({ generatedPassword }) => {
  const { hasCopied, onCopy } = useClipboard(generatedPassword);
  return (
    <Flex my="5px">
      <Text w="70%" border="1px solid #fff" borderRadius="xl">
        {generatedPassword}
      </Text>
      <Spacer />
      <Button borderRadius="xl" onClick={onCopy}>
        {hasCopied ? "Copied" : " Copy to clipboard"}
      </Button>
    </Flex>
  );
};

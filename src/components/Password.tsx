import * as React from "react";
import { Flex, Button, Spacer, Text } from "@chakra-ui/react";
import { PasswordProps } from "../interfaces/types";

export const Password: React.FC<PasswordProps> = ({ generatedPassword }) => {
  return (
    <Flex my="5px">
      <Text w="70%" border="1px solid #fff" borderRadius="xl">
        {generatedPassword}
      </Text>
      <Spacer />
      <Button borderRadius="xl">Copy to clipboard</Button>
    </Flex>
  );
};

import * as React from "react";
import { FormElementProps } from "../../interfaces/types";

import { Box, Flex, Text, FormLabel, Checkbox } from "@chakra-ui/react";
export const Letters: React.FC<FormElementProps> = ({
  formState,
  onChange,
}) => {
  return (
    <Box>
      <Flex align="center" justify="space-between" w="50%">
        <FormLabel>
          <Checkbox
            colorScheme="green"
            name="uppercase"
            defaultChecked={formState.uppercase}
            onChange={onChange}
          >
            Upper Case
          </Checkbox>
        </FormLabel>

        <Text color={formState.uppercase ? "green" : "red"} fontWeight="bold">
          (A..Z)
        </Text>
      </Flex>
      <Flex align="center" justify="space-between" w="50%">
        <FormLabel>
          <Checkbox
            colorScheme="green"
            name="lowercase"
            defaultChecked={formState.lowercase}
            onChange={onChange}
          >
            Lower Case
          </Checkbox>
        </FormLabel>

        <Text color={formState.lowercase ? "green" : "red"} fontWeight="bold">
          (a..z)
        </Text>
      </Flex>
    </Box>
  );
};

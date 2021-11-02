import * as React from "react";
import { FormElementProps } from "../../interfaces/types";

import { Box, Flex, Text, FormLabel, Checkbox } from "@chakra-ui/react";
export const Letters: React.FC<FormElementProps> = ({
  formState,
  onChange,
}) => {
  return (
    <Box>
      <Flex>
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

        <Text>(A..Z)</Text>
      </Flex>
      <Flex>
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

        <Text>(a..z)</Text>
      </Flex>
    </Box>
  );
};

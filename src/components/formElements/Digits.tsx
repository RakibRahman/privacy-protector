import * as React from "react";
import { FormElementProps } from "../../interfaces/types";

import { Box, Flex, Text, FormLabel, Checkbox } from "@chakra-ui/react";

export const Digits: React.FC<FormElementProps> = ({ formState, onChange }) => {
  return (
    <Box>
      <Flex>
        <FormLabel>
          <Checkbox
            colorScheme="green"
            name="digits"
            defaultChecked={formState.digits}
            onChange={onChange}
          >
            Digits
          </Checkbox>
        </FormLabel>

        <Text>(0..9)</Text>
      </Flex>
    </Box>
  );
};

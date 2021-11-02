import * as React from "react";
import { FormElementProps } from "../../interfaces/types";

import { Box, Flex, Text, FormLabel, Checkbox } from "@chakra-ui/react";

export const SpecialCharacters: React.FC<FormElementProps> = ({
  formState,
  onChange,
}) => {
  return (
    <Box>
      <Flex>
        <FormLabel>
          <Checkbox
            colorScheme="green"
            name="specialCharacters"
            defaultChecked={formState.specialCharacters}
            onChange={onChange}
          >
            Special Characters
          </Checkbox>
        </FormLabel>

        <Text>(~`@#$*...)</Text>
      </Flex>
    </Box>
  );
};

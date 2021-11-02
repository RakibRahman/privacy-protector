import * as React from "react";
import { FormElementProps } from "../../interfaces/types";

import { Box, Flex, Text, FormLabel, Checkbox } from "@chakra-ui/react";

export const SpecialCharacters: React.FC<FormElementProps> = ({
  formState,
  onChange,
}) => {
  return (
    <Box>
      <Flex align="center" justify="space-between" w="52%">
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

        <Text
          color={formState.specialCharacters ? "green" : "red"}
          fontWeight="bold"
        >
          (~`@#$*...)
        </Text>
      </Flex>
    </Box>
  );
};

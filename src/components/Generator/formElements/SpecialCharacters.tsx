import * as React from "react";
import { FormElementProps } from "../../interfaces/types";

import { Box, Flex, Text, FormLabel, Switch } from "@chakra-ui/react";

export const SpecialCharacters: React.FC<FormElementProps> = ({
  formState,
  onChange,
}) => {
  return (
    <Box>
      <Flex align="center" justify="space-between" w="52%">
        <FormLabel>
          <Switch
            colorScheme="green"
            name="specialCharacters"
            defaultChecked={formState.specialCharacters}
            onChange={onChange}
          >
            Special Characters
          </Switch>
        </FormLabel>

        <Text
          color={formState.specialCharacters ? "#408b16" : "#c52121"}
          fontWeight="bold"
        >
          (~`@#$*...)
        </Text>
      </Flex>
    </Box>
  );
};

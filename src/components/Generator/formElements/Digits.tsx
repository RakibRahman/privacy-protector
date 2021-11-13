import * as React from "react";
import { FormElementProps } from "../../interfaces/types";

import { Box, Flex, Text, FormLabel, Switch } from "@chakra-ui/react";

export const Digits: React.FC<FormElementProps> = ({ formState, onChange }) => {
  return (
    <Box>
      <Flex align="center" justify="space-between" w="50%">
        <FormLabel htmlFor="digits">
          <Switch
            colorScheme="green"
            name="digits"
            defaultChecked={formState.digits}
            onChange={onChange}
          >
            Digits
          </Switch>
        </FormLabel>

        <Text
          color={formState.digits ? "#408b16" : "#c52121"}
          fontWeight="bold"
        >
          (0..9)
        </Text>
      </Flex>
    </Box>
  );
};

import * as React from "react";
import { FormElementProps } from "../../interfaces/types";

import { Box, Flex, Text, FormLabel, Switch } from "@chakra-ui/react";
export const Letters: React.FC<FormElementProps> = ({
  formState,
  onChange,
}) => {
  return (
    <Box>
      <Flex align="center" justify="space-between" w="50%">
        <FormLabel htmlFor="uppercase">
          <Switch
            colorScheme="green"
            name="uppercase"
            defaultChecked={formState.uppercase}
            onChange={onChange}
          >
            Upper Case
          </Switch>
        </FormLabel>

        <Text
          color={formState.uppercase ? "#408b16" : "#c52121"}
          fontWeight="bold"
        >
          (A..Z)
        </Text>
      </Flex>
      <Flex align="center" justify="space-between" w="50%">
        <FormLabel htmlFor="lowercase">
          <Switch
            colorScheme="green"
            name="lowercase"
            defaultChecked={formState.lowercase}
            onChange={onChange}
          >
            Lower Case
          </Switch>
        </FormLabel>

        <Text
          color={formState.lowercase ? "#408b16" : "#c52121"}
          fontWeight="bold"
        >
          (a..z)
        </Text>
      </Flex>
    </Box>
  );
};

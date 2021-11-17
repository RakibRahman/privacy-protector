import React from "react";
import { FormElementProps } from "../../../interfaces/generatorTypes";

import { Flex, Text, FormLabel, Switch } from "@chakra-ui/react";

export const SpecialCharacters: React.FC<FormElementProps> = ({
  formState,
  onChange,
}) => {
  return (
    <Flex align="center" justify="space-between" w="52%">
      <FormLabel>
        <Switch
          colorScheme="green"
          name="specialCharacters"
          defaultChecked={formState.specialCharacters}
          onChange={onChange}
          mr="2"
        ></Switch>
        Special Characters
      </FormLabel>

      <Text
        color={formState.specialCharacters ? "#408b16" : "#c52121"}
        fontWeight="bold"
      >
        (~`@#$*...)
      </Text>
    </Flex>
  );
};

import React from "react";
import { FormElementProps } from "../../../interfaces/generatorTypes";

import { Flex, Text, FormLabel, Switch } from "@chakra-ui/react";

export const Digits: React.FC<FormElementProps> = ({ formState, onChange }) => {
  return (
    <Flex align="center" justify="space-between" w="50%">
      <FormLabel htmlFor="digits">
        <Switch
          colorScheme="green"
          name="digits"
          defaultChecked={formState.digits}
          onChange={onChange}
          mr="2"
        ></Switch>
        Digits
      </FormLabel>

      <Text color={formState.digits ? "#408b16" : "#c52121"} fontWeight="bold">
        (0..9)
      </Text>
    </Flex>
  );
};

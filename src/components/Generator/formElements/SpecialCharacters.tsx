import React from "react";
import { FormElementProps } from "../../../interfaces/generatorTypes";

import { Flex, Text, FormLabel, Switch } from "@chakra-ui/react";

const SpecialCharacters: React.FC<FormElementProps> = ({
  formState,
  onChange,
}) => {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <FormLabel color="#f5f5f5">
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
        color={formState.specialCharacters ? "green.500" : "red.500"}
        fontWeight="bold"
      >
        (~`@#$*...)
      </Text>
    </Flex>
  );
};
export default React.memo(SpecialCharacters);

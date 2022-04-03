import React from "react";
import { FormElementProps } from "../../../interfaces/generatorTypes";

import { Flex, Text, FormLabel, Switch } from "@chakra-ui/react";

const Digits: React.FC<FormElementProps> = ({ formState, onChange }) => {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <FormLabel htmlFor="digits" color="#f5f5f5">
        <Switch
          colorScheme="green"
          name="digits"
          defaultChecked={formState.digits}
          onChange={onChange}
          mr="2"
        ></Switch>
        Digits
      </FormLabel>

      <Text color={formState.digits ? "green.500" : "red.300"} fontWeight="bold">
        (0..9)
      </Text>
    </Flex>
  );
};
export default React.memo(Digits);

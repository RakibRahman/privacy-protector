import React from "react";
import { FormElementProps } from "../../../interfaces/generatorTypes";

import { Flex, Text, FormLabel, Switch } from "@chakra-ui/react";
export const Letters: React.FC<FormElementProps> = ({
  formState,
  onChange,
}) => {
  return (
    <>
      <Flex align="center" justify="space-between" w="100%">
        <FormLabel htmlFor="uppercase">
          <Switch
            colorScheme="green"
            name="uppercase"
            defaultChecked={formState.uppercase}
            onChange={onChange}
            mr="2"
          ></Switch>
          Upper Case
        </FormLabel>

        <Text
          color={formState.uppercase ? "green.500" : "red.500"}
          fontWeight="bold"
        >
          (A..Z)
        </Text>
      </Flex>
      <Flex align="center" justify="space-between" w="100%">
        <FormLabel htmlFor="lowercase">
          <Switch
            colorScheme="green"
            name="lowercase"
            defaultChecked={formState.lowercase}
            onChange={onChange}
            mr="2"
          ></Switch>
          Lower Case
        </FormLabel>

        <Text
          color={formState.lowercase ? "green.500" : "red.500"}
          fontWeight="bold"
        >
          (a..z)
        </Text>
      </Flex>
    </>
  );
};

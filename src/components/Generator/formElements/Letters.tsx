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
        <FormLabel htmlFor="uppercase" color="#f5f5f5">
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
          color={formState.uppercase ? "#ffffff" : "#102E4A"}
          fontWeight="extrabold"
        >
          (A..Z)
        </Text>
      </Flex>
      <Flex align="center" justify="space-between" w="100%">
        <FormLabel htmlFor="lowercase" color="#f5f5f5">
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
          color={formState.lowercase ? "#ffffff" : "#102E4A"}
          fontWeight="extrabold"
        >
          (a..z)
        </Text>
      </Flex>
    </>
  );
};

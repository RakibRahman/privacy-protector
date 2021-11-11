import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import usePasswordChecker from "../../helpers/usePasswordChecker";
import { PopUp } from "./PopUp";

interface propTypes {
  password: string;
}
export const Indicator: React.FC<propTypes> = ({ password }) => {
  const { passwordStrength } = usePasswordChecker(password);

  return (
    <Flex align="center" gridGap="1" fontSize="20">
      <Box
        w="62px"
        background={
          passwordStrength === "weak"
            ? "red"
            : passwordStrength === "medium"
            ? "orange"
            : passwordStrength === "strong"
            ? "green"
            : passwordStrength === "best"
            ? "green"
            : "gray"
        }
        h="7"
      ></Box>
      <Box
        w="62px"
        background={
          passwordStrength === "medium"
            ? "orange"
            : passwordStrength === "strong"
            ? "green"
            : passwordStrength === "best"
            ? "green"
            : "gray"
        }
        h="7"
      ></Box>
      <Box
        w="62px"
        background={
          passwordStrength === "strong"
            ? "green"
            : passwordStrength === "best"
            ? "green"
            : "gray"
        }
        h="7"
      ></Box>
      <Box
        w="62px"
        background={passwordStrength === "best" ? "green" : "gray"}
        h="7"
      ></Box>

      <Text mx="2" fontSize="20px" fontWeight="bold" letterSpacing="1px">
        {passwordStrength === "weak"
          ? "Weak"
          : passwordStrength === "medium"
          ? "Medium"
          : passwordStrength === "strong"
          ? "Strong"
          : passwordStrength === "best"
          ? "Best"
          : null}
      </Text>
      <PopUp />
    </Flex>
  );
};

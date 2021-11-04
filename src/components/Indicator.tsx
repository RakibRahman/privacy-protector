import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import usePasswordChecker from "../helpers/usePasswordChecker";

interface propTypes {
  password: string;
}
export const Indicator: React.FC<propTypes> = ({ password }) => {
  const { passwordStrength } = usePasswordChecker(password);
  React.useEffect(() => {
    console.log("object");
    console.log(passwordStrength);
  }, [passwordStrength]);
  return (
    <Box>
      <Flex align="center" gridGap="1" fontSize="20">
        <Box
          w="60px"
          background={
            passwordStrength === "weak"
              ? "red"
              : passwordStrength === "medium"
              ? "orange"
              : passwordStrength === "strong"
              ? "green"
              : "gray"
          }
          h="5"
        ></Box>
        <Box
          w="60px"
          background={
            passwordStrength === "medium"
              ? "orange"
              : passwordStrength === "strong"
              ? "green"
              : "gray"
          }
          h="5"
        ></Box>
        <Box
          w="60px"
          background={passwordStrength === "strong" ? "green" : "gray"}
          h="5"
        ></Box>

        <Text>
          {passwordStrength === "weak"
            ? "Weak"
            : passwordStrength === "medium"
            ? "Medium"
            : passwordStrength === "strong"
            ? "Strong"
            : null}
        </Text>
      </Flex>
    </Box>
  );
};

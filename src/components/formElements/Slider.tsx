import * as React from "react";
import { SliderProps } from "../../interfaces/types";

import {
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Box,
  VStack,
} from "@chakra-ui/react";

import { MdSettingsEthernet } from "react-icons/md";

export const SliderComponent: React.FC<SliderProps> = ({
  formState,
  setFormState,
}) => {
  return (
    <Flex
      w="100%"
      gridGap="5"
      flexDirection="column"
      my="2"
      borderBottom="1px solid #fff"
    >
      <VStack>
        <Slider
          w="90%"
          name="passLength"
          aria-label="password length"
          defaultValue={formState.passLength}
          colorScheme="telegram"
          min={8}
          max={100}
          onChange={(value) =>
            setFormState({ ...formState, passLength: value })
          }
        >
          <SliderTrack bg="red.100">
            <SliderFilledTrack
              bg={
                formState.passLength < 20
                  ? "red"
                  : formState.passLength > 45
                  ? "orange"
                  : "green"
              }
            />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="tomato" as={MdSettingsEthernet} />
          </SliderThumb>
        </Slider>
        <Flex fontSize="lg" align="center" gridGap="2">
          <Text>Password Length:</Text>
          <Text
            color={
              formState.passLength < 20
                ? "red"
                : formState.passLength > 45
                ? "orange"
                : "green"
            }
            fontWeight="bold"
          >
            {formState.passLength}
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

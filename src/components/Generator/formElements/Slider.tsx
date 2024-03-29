import React from "react";
import { SliderProps } from "../../../interfaces/generatorTypes";

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

const SliderComponent: React.FC<SliderProps> = ({
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
          min={3}
          max={100}
          onChange={(value) =>
            setFormState({ ...formState, passLength: value })
          }
        >
          <SliderTrack bg="red.100">
            <SliderFilledTrack
              bg={
                formState.passLength < 20
                  ? "#ffffff"
                  : formState.passLength > 45
                  ? "#ffd850"
                  : "#5dc633"
              }
            />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="tomato" as={MdSettingsEthernet} />
          </SliderThumb>
        </Slider>
        <Flex fontSize="lg" align="center" gridGap="2">
          <Text color="#f5f5f5">Password Length:</Text>
          <Text
            fontSize="xl"
            color={
              formState.passLength < 20
                ? "#ffffff"
                : formState.passLength > 45
                ? "#ffd850"
                : "#5dc633"
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
export default React.memo(SliderComponent);

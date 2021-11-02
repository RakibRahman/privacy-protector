import * as React from "react";
import { FormElementProps } from "../../interfaces/types";

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
import { MdGraphicEq } from "react-icons/md";
import { MdSettingsEthernet } from "react-icons/md";

export const SliderComponent: React.FC<FormElementProps> = ({
  formState,
  setFormState,
}) => {
  return (
    <Flex w="100%" gridGap="5" flexDirection="column" mt="2">
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
              bg={formState.passLength < 20 ? "red" : "green"}
            />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="tomato" as={MdSettingsEthernet} />
          </SliderThumb>
        </Slider>
        <Text>{formState.passLength}</Text>

        <Text fontSize="lg">Password Length</Text>
      </VStack>
    </Flex>
  );
};

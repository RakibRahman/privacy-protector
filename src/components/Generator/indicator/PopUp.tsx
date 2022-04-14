import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Box,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import Info from "../../../assets/pass-info.png";
import { MdInfo } from "react-icons/md";

const PopUp = () => {

  const bg = useColorModeValue("#1C77C3", "#14591D");
  return (
    <Box ml="auto" fontSize="1.8rem">
      <Popover placement="auto">
        <PopoverTrigger>
          <Button
            bg="transparent"
            transition="all 0.3s ease"
            fontSize="26px"
            _hover={{ bg: "none", fontSize: "30px" }}
          >
            <MdInfo color="#f5f5f5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg={bg}
          w={{ base: "300px", md: "500px" }}
          color="#ffffff"
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>How to Create a Strong Password</PopoverHeader>
          <PopoverBody>
            <Image src={Info} alt="pass strength" w="100%" h="200px" />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
export default React.memo(PopUp);

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
} from "@chakra-ui/react";
import Info from "../../../assets/pass-info.png";
import { MdInfo } from "react-icons/md";

const PopUp = () => {
  return (
    <Box ml="auto" fontSize="1.8rem">
      <Popover placement="auto">
        <PopoverTrigger>
          <Button bg="transparent" fontSize="26">
            <MdInfo color="#f5f5f5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg="#17AE6F"
          w={{ base: "300px", md: "500px" }}
          color="#ffffff"
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>How to Create a Strong Password</PopoverHeader>
          <PopoverBody>
            <Image src={Info} alt="pass strength" w='100%' h='200px' />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
export default React.memo(PopUp);

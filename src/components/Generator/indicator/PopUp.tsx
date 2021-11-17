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

export const PopUp = () => {
  return (
    <Box ml="auto" fontSize="1.8rem">
      <Popover placement="right">
        <PopoverTrigger>
          <Button bg="transparent" fontSize="26">
            <MdInfo color="#2196F3" />
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
            <Image src={Info} alt="pass strength" />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

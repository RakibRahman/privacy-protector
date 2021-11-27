import React from "react";
import { Button } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface Props {
  flag: boolean;
  setFlag: () => void;
}
export const ShowPassword: React.FC<Props> = ({ flag, setFlag }) => {
  return (
    <Button
      _hover={{ bg: "none" }}
      bg="transparent"
      onClick={setFlag}
      _focus={{ border: "none", bg: "none" }}
    >
      {flag ? (
        <AiFillEyeInvisible fontSize="1.5rem" />
      ) : (
        <AiFillEye fontSize="1.5rem" />
      )}

      {flag ? "Hide Password" : "Show Password"}
    </Button>
  );
};

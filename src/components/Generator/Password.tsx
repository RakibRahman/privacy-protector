import React from "react";
import { Flex, Button, Spacer, useClipboard, Input } from "@chakra-ui/react";
import { PasswordProps } from "../../interfaces/generatorTypes";
import useToaster from "../../helpers/useToaster";
import { useTheme } from "../../context/themeContext";

const Password: React.FC<PasswordProps> = ({ generatedPassword, onChange }) => {
  const { color } = useTheme()!;
  const { hasCopied, onCopy } = useClipboard(generatedPassword);
  const { toast } = useToaster(
    "Password copied",
    "Keep your password safe",
    "success",
    "copyPass"
  );

  const { toast: toastError } = useToaster(
    "No Password to copy",
    "Enter or Generate New Password",
    "error",
    "copyPassError"
  );

  return (
    <Flex
      my="5px"
      align="center"
      justify="center"
      flexDirection="column"
      gridGap="2"
    >
      <Input
        color="#ffffff"
        focusBorderColor="#1BAF72"
        type="text"
        w="100%"
        minH="40px"
        p={2}
        fontSize="1rem"
        borderColor="#f5f5f5"
        value={generatedPassword}
        onChange={onChange}
        name="generatedPassword"
      />

      <Spacer />
      <Button
        _hover={{
          background: "none",
          opacity: 0.5
        }}
        cursor="copy"
        borderRadius="lg"
        onClick={() => {
          if (generatedPassword.length > 0) {
            onCopy();
            if (!toast.isActive("copyPass")) {
              toast();
            }
          }
          if (generatedPassword.length <= 0) {
            if (!toast.isActive("copyPassError")) {
              toastError();
            }
          }
        }}
        w="160px"
        textAlign="center"
        color="#f5f5f5"
        variant="outline"
        colorScheme={color}
      >
        {hasCopied ? "Copied" : "Copy to Clipboard"}
      </Button>
    </Flex>
  );
};
export default React.memo(Password);

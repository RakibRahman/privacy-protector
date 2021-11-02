import { useToast } from "@chakra-ui/react";

const useToaster = (title: string, description: string) => {
  const toast = useToast({
    title: title,
    description: description,
    status: "success",
    duration: 3000,
    isClosable: true,
  });
  return { toast };
};
export default useToaster;

import { useToast } from "@chakra-ui/react";

const useToaster = (
  title: string,
  description: string,
  toastStatus: "info" | "warning" | "success" | "error",
  id?: string
) => {
  const toast = useToast({
    id,
    title: title,
    description: description,
    status: toastStatus,
    duration: 4000,
    isClosable: true,
    position: "bottom",
    variant:'solid',
  });

  return { toast };
};
export default useToaster;

import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CollectionProps } from "../../../interfaces/vaultTypes";
import { Link } from "react-router-dom";
import { useFireStore } from "./hooks/useFireStore";
import UpdateData from "./UpdateData";
const UserDetail: React.FC<{ login: CollectionProps }> = ({ login }) => {
  const { deleteUserLogin } = useFireStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        flex="1"
        textAlign="left"
        onClick={onOpen}
        bg="#FFFFFF"
        p="3"
        cursor="pointer"
      >
        <Image
          w="4rem"
          h="4rem"
          borderRadius="5px"
          mx="auto"
          objectFit="cover"
          src={login.favicon}
          alt={"💂‍♂️"}
        />

        <Text>{login.site}</Text>
        <Text fontWeight="bold">{login.username}</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column">
              <Box>
                <Heading size="sm">Website URL:</Heading>
                <Link
                  to={{
                    pathname: `${
                      login.site.includes("https://")
                        ? login.site
                        : `'https://'${login.site}`
                    }`,
                  }}
                  target="_blank"
                >
                  {login.site}
                </Link>
              </Box>
              <Box>
                <Heading size="sm">UserName:</Heading>
                <Text>{login.username}</Text>
              </Box>
              <Box>
                <Heading size="sm">Password:</Heading>
                <Text>{login.password}</Text>
              </Box>
              <Box>
                <Text>
                  Created At: {login.createdAt.toDate().toDateString()}
                </Text>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex align="center" justify="center">
              <Button
                bg="red"
                color="white"
                mx="1"
                onClick={() => deleteUserLogin(login.id)}
              >
                Delete
              </Button>
              <UpdateData login={login} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default React.memo(UserDetail);

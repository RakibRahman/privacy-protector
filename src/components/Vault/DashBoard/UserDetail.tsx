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
import { FcGlobe, FcKey, FcReading, FcAbout } from "react-icons/fc";
import UpdateData from "./UpdateData";

const UserDetail: React.FC<{ login: CollectionProps }> = ({ login }) => {
  const { deleteUserLogin } = useFireStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        mx="auto"
        w="300px"
        flex="1"
        textAlign="left"
        onClick={onOpen}
        bg="#22AE77"
        color="#ffffff"
        p="3"
        cursor="pointer"
        borderRadius="5px"
        className="card"
      >
        <Image
          w="4rem"
          h="4rem"
          borderRadius="5px"
          mx="auto"
          objectFit="cover"
          src={login.favicon}
          alt="🔗"
        />

        <Heading size="md" letterSpacing="1px">
          {login.site.replace(/.+\/\/|www.|\..+/g, "")}
        </Heading>
        <Text fontWeight="bold" letterSpacing="1px">
          {login.username}
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#CAEDE0">
          <ModalHeader bg="#23B179" color="white">
            Login Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column" gridGap="3">
              <Flex gridGap="4" align="center">
                <FcGlobe fontSize="2.5rem" />
                <Box>
                  <Heading size="sm" letterSpacing="1px">
                    Website
                  </Heading>
                  <Link
                    to={{
                      pathname: `${
                        login.site.includes("https://")
                          ? login.site
                          : `https://${login.site}`
                      }`,
                    }}
                    target="_blank"
                  >
                    {login.site}
                  </Link>
                </Box>
              </Flex>
              <Flex gridGap="4" align="center">
                <FcReading fontSize="2.5rem" />
                <Box>
                  <Heading size="sm" letterSpacing="1px">
                    ID/UserName
                  </Heading>
                  <Text>{login.username}</Text>
                </Box>
              </Flex>
              <Flex gridGap="4" align="center">
                <FcKey fontSize="2.5rem" />
                <Box>
                  <Heading size="sm" letterSpacing="1px">
                    Password
                  </Heading>
                  <Text>{login.password}</Text>
                </Box>
              </Flex>

              <Flex gridGap="4" align="center">
                <FcAbout fontSize="2.5rem" />
                <Box>
                  <Text fontWeight="bold" letterSpacing="1px">
                    Created At:
                  </Text>
                  <Text>{login.createdAt.toDate().toDateString()}</Text>
                </Box>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex align="center" justify="center">
              <Button
                bg="#C73636"
                color="white"
                mx="1"
                onClick={() => deleteUserLogin(login.id)}
                _hover={{
                  opacity: 0.7,
                  transform: "scale(1.03)",
                }}
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

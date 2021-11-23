import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Button,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CollectionProps } from "../../../interfaces/vaultTypes";
import { Link } from "react-router-dom";
import { useFireStore } from "./hooks/useFireStore";
import UpdateData from "./UpdateData";
const UserDetail: React.FC<{ login: CollectionProps }> = ({ login }) => {
  const { deleteUserLogin } = useFireStore();

  return (
    <Accordion allowToggle w="100%">
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "tomato", color: "white" }}
            _hover={{ opacity: 0.8, transform: "scale(1.1)" }}
          >
            <Box flex="1" textAlign="left">
              <Flex gridGap="2" align="center" justify="center" pl="1" w="100%">
                <Image
                  w="3rem"
                  h="3rem"
                  objectFit="cover"
                  src={login.favicon}
                  alt={"💂‍♂️"}
                />

                <Box>
                  <Text>{login.site}</Text>
                  <Text fontWeight="bold">{login.username}</Text>
                </Box>
              </Flex>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Center>
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
              <Flex>
                <Button
                  mt="3"
                  bg="red"
                  color="white"
                  mx="1"
                  onClick={() => deleteUserLogin(login.id)}
                >
                  Delete
                </Button>
                {/* <Button
                  mt="3"
                  bg="skyblue"
                  color="white"
                  mx="1"
                  onClick={() => updateUserLogin(login.id)}
                >
                  Edit
                </Button> */}
                <UpdateData login={login} />
              </Flex>
            </Flex>
          </Center>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default React.memo(UserDetail);

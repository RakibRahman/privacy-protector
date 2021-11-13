import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
  Center,
} from "@chakra-ui/react";
export const Home = () => {
  return (
    <Center bg="lightblue" minH="80vh">
      <Tabs isFitted variant="enclosed" align="center" w="600px" border="1px">
        <TabList mb="1em">
          <Tab>Log In</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

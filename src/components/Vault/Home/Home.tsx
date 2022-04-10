import React, { lazy, Suspense } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { FallBack } from "../../FallBack/FallBack";
import { LogIn } from "./LogIn";
const SignUp = lazy(() => import("./SignUp"));

const Home = () => {
  const bg = useColorModeValue("#1C77C3", "#24313C");
  const color = useColorModeValue("#24313C", "#f5f5f5");

  return (
    <Center className="vault__home" mt="20" p={5}>
      <Tabs
        isFitted
        variant="enclosed-colored"
        align="center"
        w="600px"
        border="1px"
        bg={bg}
        color={color}
      >
        <TabList mb="1em">
          <Tab _selected={{ color: "white", bg: "#1AB188" }}>Log In</Tab>
          <Tab _selected={{ color: "white", bg: "#1AB188" }}>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LogIn />
          </TabPanel>
          <TabPanel>
            <Suspense fallback={<FallBack />}>
              <SignUp />
            </Suspense>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};
export default React.memo(Home);

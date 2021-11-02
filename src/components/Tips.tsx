import * as React from "react";
import {
  Box,
  Link,
  Text,
  Heading,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
export const Tips = () => {
  return (
    <Box w="80%" mx="auto" p="4">
      <Flex flexDirection="column" gridGap="2" mb="2">
        <Heading>
          7 Password Experts on How to Lock Down Your Online Security
        </Heading>
        <Text fontSize="xl" fontWeight="bold">
          You've got the password basics down. It's time for some advanced
          techniques.
        </Text>
        <Text fontSize="lg">Article By Brian Barrett</Text>
      </Flex>
      <Image
        src="https://images.unsplash.com/photo-1504203700686-f21e703e5f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=883&q=80"
        alt="demo password pic"
      />
      <VStack my="10" fontSize="19" w="80%" spacing="20px">
        <Text>
          <strong> As far as</strong> made-up holidays go, “World Password Day”
          doesn’t quite have the same cachet as, say, Father’s Day, or even
          National Pancake Day (March 8th). Still, it’s as good an excuse as any
          to fix your bad passwords. Or better yet, to finally realize that the
          password you thought was good still needs some work.
        </Text>
        <Text>
          By now you know the basics of password security. Don’t write them
          down, get a password manager, use two-factor authentication whenever
          possible, and don’t use anything that’s easily guessable. (Looking at
          you, “111111” crowd).
        </Text>
        <Text>
          All of that advice still stands, and you should keep it up. Nice work!
          But now it’s time for an advanced beginner course. WIRED asked a field
          of password security experts for their favorite unexpected advice, the
          best practices that might save you the most headache in the long run.
          Here are seven tips and tricks to keep your digital locks secure.
        </Text>
      </VStack>
      <Box fontSize="19">
        <Flex flexDirection="column" gridGap="6" w="60%">
          <Heading> 1. Think Length, Not Complexity</Heading>
          <Text>
            “A longer password is usually better than a more random password,”
            says Mark Burnett, author of Perfect Passwords, “as long as the
            password is at least 12-15 characters long.”
          </Text>
          <Text>
            In fact, a long password that comprises only lower-case letters can
            be more beneficial than crafting just the right combination of
            alphanumeric gibberish. “Usually all it takes is a password just two
            characters longer to make up for a lack of other types of characters
            such as upper-case, numbers, or symbols,” says Burnett.
          </Text>
          <Text>
            In other words, the time spent making your password look like Popeye
            cursing would be better applied toward typing two more (easier to
            remember) plain ol’ letters.
          </Text>
        </Flex>
        <Box>
          <Flex flexDirection="column" gridGap="6" w="60%">
            <Heading>2. Keep It Weird</Heading>
            <Text>
              That’s not to say you should be content with “111111111111111.”
              Longer is always better, but that length yields diminishing
              returns if you’re not still mixing it up.
            </Text>
            <Text>
              “We have seen an effort by many people to be more secure by adding
              characters to passwords, but if these longer passwords are based
              on simple patterns they will put you in just as much risk of
              having your identity stolen by hackers,” says Morgan Slain, CEO of
              SplashData, a password management company that puts out an annual
              list of that year’s worst passwords.
            </Text>
            <Text>
              Slain also suggests avoiding common sports and pop culture
              terms---Star Wars phrases were especially popular last
              year---regardless of length. The more common a password is, the
              less secure it will be, so go with something no one else would
              (ideally, a random string).
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex flexDirection="column" gridGap="6" w="60%">
            <Heading>3. Don’t Bunch Up Your Special Characters</Heading>
            <Text>
              Many password input fields now require you to use a combination of
              upper case and lower case letters, numbers, and symbols. That’s
              fine! Just keep them separated.
            </Text>
            <Text>
              “Put your digits, symbols, and capital letters spread throughout
              the middle of your password, not at the beginning or end,” says
              Lorrie Faith Cranor, FTC Chief Technologist and Carnegie Mellon
              computer science professor. “Most people put capital letters at
              the beginning and digits and symbols at the end. If you do that,
              you get very little benefit from adding these special characters.”
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

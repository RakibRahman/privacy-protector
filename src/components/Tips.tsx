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
import { MdHome } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";
export const Tips = () => {
  React.useEffect(() => {
    document.title = "Tips || Privacy Protector";
  }, []);
  return (
    <Box className="tips__wrapper">
      <Box w="80%" mx="auto" p="4" className="tips">
        <Flex flexDirection="column" gridGap="2" mb="2" color="white" w>
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
        <VStack my="10" fontSize="19" spacing="25px" color="white">
          <Text>
            <strong> As far as</strong> made-up holidays go, “World Password
            Day” doesn’t quite have the same cachet as, say, Father’s Day, or
            even National Pancake Day (March 8th). Still, it’s as good an excuse
            as any to fix your bad passwords. Or better yet, to finally realize
            that the password you thought was good still needs some work.
          </Text>
          <Text>
            By now you know the basics of password security. Don’t write them
            down, get a password manager, use two-factor authentication whenever
            possible, and don’t use anything that’s easily guessable. (Looking
            at you, “111111” crowd).
          </Text>
          <Text>
            All of that advice still stands, and you should keep it up. Nice
            work! But now it’s time for an advanced beginner course. WIRED asked
            a field of password security experts for their favorite unexpected
            advice, the best practices that might save you the most headache in
            the long run. Here are seven tips and tricks to keep your digital
            locks secure.
          </Text>
        </VStack>
        <Flex flexDirection="column" gridGap="8" fontSize="22" color="white">
          <Flex flexDirection="column" gridGap="8">
            <Heading> 1. Think Length, Not Complexity</Heading>
            <Text>
              “A longer password is usually better than a more random password,”
              says Mark Burnett, author of Perfect Passwords, “as long as the
              password is at least 12-15 characters long.”
            </Text>
            <Text>
              In fact, a long password that comprises only lower-case letters
              can be more beneficial than crafting just the right combination of
              alphanumeric gibberish. “Usually all it takes is a password just
              two characters longer to make up for a lack of other types of
              characters such as upper-case, numbers, or symbols,” says Burnett.
            </Text>
            <Text>
              In other words, the time spent making your password look like
              Popeye cursing would be better applied toward typing two more
              (easier to remember) plain ol’ letters.
            </Text>
          </Flex>

          <Flex flexDirection="column" gridGap="6" color="white">
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

          <Flex flexDirection="column" gridGap="6">
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
          <Flex flexDirection="column" gridGap="6">
            <Heading>4. Never Double Dip</Heading>
            <Text>
              You’ve followed every password recommendation, down to the last
              &$@. It would take years for someone to crack. Your password is so
              good, in fact, and took so long to memorize, that you’ve decided
              to use it on a couple of accounts.
            </Text>
            <Text>This is bad!</Text>
            <Text>
              “Even if you have an ‘unimportant’ password and an ‘important’
              password tier, it’s very unsafe,” says Joe Siegrist, VP and GM of
              popular password manager LastPass. “It makes it way too easy for a
              hacker to attack one site and get your password to all the
              others.”
              <Text>
                The main point here, really, is that your passwords are only as
                secure as the sites to which you entrust them. If you don’t want
                to pay dearly for someone else’s mistake, limit the potential
                fallout by using a unique password everywhere. Or, you know,
                skip the whole thing and use a password manager.
              </Text>
            </Text>
          </Flex>
          <Flex flexDirection="column" gridGap="6">
            <Heading>5. Don’t Change Them So Dang Often</Heading>
            <Text>
              We’ve touched on this before, but it’s counterintuitive enough
              that it bears repeating: Don’t change passwords every month. And
              if you’re an IT admin, don’t force your employees to.
            </Text>
            <Text>
              “Admins who set password policies are better off requiring longer
              passwords and letting users keep them for longer, rather than
              requiring them to change passwords every one or two months,” says
              Burnett. “This encourages users to have stronger passwords and
              avoids simple schemes like incrementing a number at the end of the
              password each time they have to reset it.”
            </Text>
            <Text>
              "Frequent password changes are largely a waste of time," says
              Microsoft Research security expert Cormac Herley. "There’s no
              evidence that password changes improve outcomes.
            </Text>
          </Flex>
          <Flex gridGap="6" flexDirection="column">
            <Heading>6. Take the Panic Down a Notch</Heading>

            <Text>
              You're right to do everything you can to make your password as
              safe as possible. But it might also help to remember that most
              people don't need a digital Fort Knox. A digital combination lock
              should do just fine.
            </Text>
            <Text>
              "Ignore the stories about attackers doing billions of guesses and
              saying that the average password can be guessed in under a second:
              your bank is not going to allow an attacker to try 100 billion
              guesses," says Herley. "For your web passwords you mostly have to
              worry about withstanding a few thousand guesses."
            </Text>
            <Text>
              Yes, that's still a lot of guesses. But if anything, it's a
              reminder that if you do commit to password best practices, the bad
              guys are probably going to move right along.
            </Text>
          </Flex>
          <Flex flexDirection="column" gridGap="6">
            <Heading>7. Layer Up</Heading>
            <Text>
              When deployed properly, passwords are pretty good. They’re much
              better, though, as part of an overall plan of attack. This goes
              double for those on the admin side of the aisle.
            </Text>
            <Text>
              “Don’t rely on passwords alone!” says Neil Wynne, a senior
              research analyst at Gartner who focuses on business security.
              “Passwords should not be considered sufficient for anything other
              than the lowest-risk applications.”
            </Text>
            <Text>
              Adding a layer of protection makes sense, but it also has
              potential ancillary benefits that aren’t quite so obvious.
            </Text>
            <Text>
              “By adding [extra authentication], a company could have a less
              strict password policy, like less characters or requiring password
              changes less frequently,” says Jackson Shaw, Senior Director of
              Product Management for Dell Security{" "}
            </Text>
            <Text>
              Which, hey! As great as an airtight password is, anything that
              makes them a little easier to achieve is more than welcome.{" "}
            </Text>
          </Flex>
          <Link
            mt="30"
            fontSize="xl"
            fontWeight="bold"
            href="https://www.wired.com/2016/05/password-tips-experts/"
          >
            Credit
          </Link>

          <ReactLink className="return__home" to="/">
            <MdHome color="#f9f047" />
          </ReactLink>
        </Flex>
      </Box>
    </Box>
  );
};

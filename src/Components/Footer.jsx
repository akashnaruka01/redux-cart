import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <hr />
      <Box w="full" p={"4"} h="22vh" className="footerBox">
        <Stack
          className="footer"
          h={"70%"}
          color={"white"}
          justifyContent={"space-between"}
          display={"flex"}
          flexDirection={"row"}
        >
          <HStack w={"auto"} className="footerPart1">
            <Text
              letterSpacing={"widest"}
              lineHeight={"150%"}
              fontSize={"1.5rem"}
              textAlign={"center"}
              fontWeight={"500"}
              className="heading"
              color={"#2874f0"}
              p={"2"}
            >
              Shopping Cart
            </Text>
          </HStack>
          <HStack
            className="footerLine"
            w={"60%"}
            bgColor={"white"}
            m={"4"}
            h={"0.1"}
            alignSelf={"center"}
          ></HStack>

          <Stack justifyContent={"center"} gap={"10px"} w={"20%"} className="socialMedia">
            <Heading alignSelf={"center"} color={"gray"} className="socialMediaH">
              Social Media
            </Heading>

            <HStack w={"auto"} justifyContent={"center"} gap={"20px"}>
              <Button variant={"link"} bgColor={"inherit"} border={"0"}>
                <a href="https://github.com/akashnaruka01">
                  <AiFillGithub size={"40"} color="grey" />
                </a>
              </Button>
              <Button variant={"link"} bgColor={"inherit"} border={"0"}>
                <a href="https://www.linkedin.com/in/akash-singh-78897620b/">
                  <AiFillLinkedin size={"40"} color="grey" />
                </a>
              </Button>
              <Button variant={"link"} bgColor={"inherit"} border={"0"}>
                <a href="https://www.instagram.com/prabhuu_000001/">
                  <AiFillInstagram size={"40"} color="grey" />
                </a>
              </Button>
              <Button variant={"link"} bgColor={"inherit"} border={"0"}>
                <a href="https://www.facebook.com/akash.naruka.71/">
                  <AiFillFacebook size={"40"} color="grey" />
                </a>
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Text
          className="copyright"
          color={"white"}
          fontSize={ "1.2rem"}
          px={"4"}
        >
          Copyright © 2023 Rookie.Crypto. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;

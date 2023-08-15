import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';


const Footer = () => {
  return <>
    <hr />
    <Box w="full" p={"4"} h="22vh"  className="footerBox">
        <Stack
          className='footer'
          h={"70%"}
          color={"white"}
          justifyContent={"space-between"}
          display={'flex'}
          flexDirection={"row"}
        >
          <HStack w={"auto"} className="footerPart1" >
           
            <Text
              letterSpacing={"widest"}
              lineHeight={"150%"}
              fontSize={"1.5rem"}
              textAlign={"center"}
              fontWeight={"500"}
              className="heading"
              color={'#2874f0'}
              p={'2'}
            >
              Shopping Cart
            </Text>
          </HStack>
          <HStack
            className="footerLine"
            w={["0%", "container", "30%", "40%"]}
            bgColor={"whiteAlpha.900"}
            m={"4"}
            h={"0.1"}
            alignSelf={"center"}
          ></HStack>

          <HStack p={"4"} w={"auto"} justifyContent={'center'} >
            <Button variant={"link"} bgColor={'inherit'} border={'0'}>
              <a href="https://github.com/akashnaruka01">
                <AiFillGithub size={"40"} color='grey'/>
              </a>
            </Button>
            <Button variant={"link"} bgColor={'inherit'} border={'0'}>
              <a href="https://www.linkedin.com/in/akash-singh-78897620b/">
                <AiFillLinkedin size={"40"} color='grey'/>
              </a>
            </Button>
            <Button variant={"link"} bgColor={'inherit'} border={'0'}>
              <a href="https://www.instagram.com/">
                <AiFillInstagram size={"40"} color='grey'/>
              </a>
            </Button>
            <Button variant={"link"} bgColor={'inherit'} border={'0'}>
              <a href="https://www.facebook.com">
                <AiFillFacebook size={"40"} color='grey'/>
              </a>
            </Button>
            <Button variant={"link"} bgColor={'inherit'} border={'0'}>
              <a href="https://web.telegram.org/">
                <AiFillLinkedin size={"40"}  color='grey'/>
              </a>
            </Button>
          </HStack>
        </Stack>
        <Text
        className="copyright"
          color={"white"}
          fontSize={["0.8rem", "0.9rem", "1.2rem"]}
          px={"4"}
        >
          Copyright © 2023 Rookie.Crypto. All rights reserved.
        </Text>
      </Box>
  </>
}

export default Footer
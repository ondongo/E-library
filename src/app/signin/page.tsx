"use client";
import Title from "@/components/Title";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

// Custom components

// Assets
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

import React from "react";
import { HSeparator } from "@/components/separator/Separator";

function Signin() {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex height="100vh" background="#118A7E" overflow={"hidden"}>
      <Flex
        width="903.792px"
        height="98%"
        flexShrink="0"
        borderRadius="26.661px 26.661px 213.284px 26.661px"
        background="#FFF"
        zIndex={4}
        direction={"column"}
        gap={2}
        mt={2}
        justifyContent={"center"}
        overflow={"hidden"}
      >
        <Flex justifyContent={"center"}>
          <Title size="68.005px" color="black" />
        </Flex>

        <Flex
          w="100%"
       
          p={5}
          gap={4}
          direction={"column"}
          justifyContent="center"
          mb={{ base: "30px", md: "60px" }}
          flexDirection="column"
       
          alignItems={"center"}
        >
          <Box>
            <Heading color={textColor} fontSize="36px" mb="10px">
              Connexion
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColorSecondary}
              fontWeight="400"
              fontSize="md"
            >
              Entrez votre email et votre mot de passe pour vous connecter!
            </Text>
          </Box>
          <Flex
            zIndex="2"
            direction="column"
            w={{ base: "100%", md: "420px" }}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mb={{ base: "20px", md: "auto" }}
          >
            <Button
              fontSize="sm"
              mb="26px"
              py="15px"
              h="50px"
              borderRadius="8px"
              bgColor={googleBg}
              color={googleText}
              fontWeight="500"
              _hover={googleHover}
              _active={googleActive}
              _focus={googleActive}
            >
              <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
              Connectez-vous avec Google
            </Button>
            <Flex align="center" mb="25px">
              <HSeparator />
              <Text color="gray.400" mx="14px">
                ou
              </Text>
              <HSeparator />
            </Flex>
            <FormControl>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="email"
                placeholder="mail@simmmple.com"
                mb="24px"
                fontWeight="500"
                size="lg"
              />
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  fontSize="sm"
                  placeholder="Min. 8 caractères"
                  mb="24px"
                  size="lg"
                  type={show ? "text" : "password"}
                  variant="auth"
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <Flex justifyContent="flex-end" align="center" mb="24px">
                <Link href="/auth/forgot-password">
                  <Text
                    color={textColorBrand}
                    fontSize="sm"
                    w="150px"
                    fontWeight="500"
                  >
                    Mot de passe oublié?
                  </Text>
                </Link>
              </Flex>
              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
              >
                Se connecter
              </Button>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              maxW="100%"
              mt="0px"
            >
              <Link href="/auth/sign-up">
                <Text color={textColorDetails} fontWeight="400" fontSize="14px">
                  Pas encore inscrit ?
                  <Text
                    color={textColorBrand}
                    as="span"
                    ms="5px"
                    fontWeight="500"
                  >
                    Créer un Compte
                  </Text>
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        position="fixed"
        right={0}
        bottom={-32}
        zIndex={5}
        width="691.771px"
        height="719px"
        justifyContent="center"
        alignItems="center"
        flexShrink="0"
      >
        <Image src="/student.png" alt="" />
      </Flex>
      <Flex position="fixed" right={0} bottom={0} zIndex={2}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="729"
          height="272"
          viewBox="0 0 729 272"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 25.8065L13.7091 31.6683C27.4182 37.53 55.4596 49.2535 82.8778 37.53C110.919 25.8065 138.337 -9.36396 166.379 2.35953C193.797 14.083 221.838 72.7005 249.256 125.456C276.675 178.212 304.716 225.106 332.134 248.553C360.176 272 387.594 272 415.635 260.276C443.053 248.553 471.095 225.106 498.513 225.106C525.931 225.106 553.973 248.553 581.391 207.521C609.432 166.489 636.85 60.977 664.892 55.1153C692.31 49.2535 720.351 143.042 734.06 189.936L747.769 236.829V272H734.06C720.351 272 692.31 272 664.892 272C636.85 272 609.432 272 581.391 272C553.973 272 525.931 272 498.513 272C471.095 272 443.053 272 415.635 272C387.594 272 360.176 272 332.134 272C304.716 272 276.675 272 249.256 272C221.838 272 193.797 272 166.379 272C138.337 272 110.919 272 82.8778 272C55.4596 272 27.4182 272 13.7091 272H0V25.8065Z"
            fill="#FCFF67"
          />
        </svg>
      </Flex>
    </Flex>
  );
}

export default Signin;

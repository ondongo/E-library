import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logoWhite from "img/layout/logoWhite.png";
import { FaHeart } from "react-icons/fa";

export default function SidebarDocs() {
  const bgColor = "rgba(0, 0, 0, 0.63)";
  const borderColor = useColorModeValue("white", "navy.800");

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={bgColor}
      borderRadius="30px"
      position="relative"
    >
      <Flex
        border="5px solid"
        borderColor={borderColor}
        bg="#418A7E"
        borderRadius="50%"
        w="94px"
        h="94px"
        align="center"
        justify="center"
        mx="auto"
        position="absolute"
        left="50%"
        top="-47px"
        transform="translate(-50%, 0%)"
      >
        <FaHeart w="40px" h="40px" fontSize="26px" />
      </Flex>
      <Flex
        direction="column"
        mb="12px"
        align="center"
        justify="center"
        px="15px"
        pt="55px"
      >
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color="white"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          px="10px"
          mb="14px"
        >
          Faire un don
        </Text>
        <Text
          fontSize="14px"
          color={"white"}
          px="10px"
          mb="14px"
          textAlign="center"
        >
          Soutenez notre E-library et aidez-nous à promouvoir la lecture en
          faisant un don aujourd&apos;hui
        </Text>
      </Flex>
      <Link href="https://horizon-ui.com/pro">
        <Button
          bg="whiteAlpha.300"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          fontWeight="regular"
          fontSize="sm"
          minW="185px"
          mx="auto"
        >
          Cliquer ici !
        </Button>
      </Link>
    </Flex>
  );
}

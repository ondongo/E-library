import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Center,
  Icon,
  Link,
  Button,
} from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiSettings2Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
import EllipseProgress from "../EllipseProgress";
import { DrawerDetails } from "../DrawerDetails";

function SideBarRight() {
  return (
    <Flex
      width="317.812px"
      direction="column"
      height="100vh"
      flexShrink="0"
      color="white"
      background="#118A7E"
      boxShadow="4px 4px 0px 0px rgba(0, 0, 0, 0.25)"
      position={"fixed"}
      right={"0"}
      gap={"20px"}
      top={'120px'}
      borderRadius="25px 25px 0px 0px"
    >
     
      <Flex direction={"column"} gap={4} p={4}>
        <Text
          color="rgba(0, 0, 0, 0.63)"
          fontFamily="Inter"
          fontSize="22.045px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
        >
          Rythme de lecture 
        </Text>

        <Flex
          width="298.523px"
          height="90.935px"
          flexShrink="0"
          borderRadius="22.963px"
          background="#FFF"
          justifyContent={"space-between"}
          p={"10px"}
          alignItems={"center"}
        >
          <Flex direction={"column"} alignItems={"center"}>
            <Text
              color="#2BCE89"
              fontFamily="Inter"
              fontSize="18.371px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              Cette semaine
            </Text>
            <Image
              src="/livreIcon.png"
              alt=""
              width="74.401px"
              height="58.786px"
            />
          </Flex>
          <EllipseProgress value="40" max="100" />
        </Flex>
      </Flex>

      <Flex
        width="317.812px"
        height="699.003px"
        flexShrink="0"
        borderRadius="18.371px 18.371px 9.185px 9.185px"
        background="#FFF"
        direction={"column"}
        p={4}
        alignItems={"center"}
        gap={4}
      >
        <Text
          color="#000"
          textAlign="center"
          font-size="23.758px"
          font-style="normal"
          fontWeight="500"
          lineHeight="20.496px"
        >
          {" "}
          Details
        </Text>

        <Flex direction={"column"} gap={"8px"} alignItems={"center"}>
          <Flex
            width="134.63px"
            height="187.539px"
            flexShrink="0"
            borderRadius="6.346px"
            background="#118A7E"
            p={"10px"}
            justifyContent={"center"}
          >
            <Image
              src="Biblio/Livre4.png"
              alt=""
              borderRadius="8.033px"
              width="106.865px"
              height="168.222px"
            />
          </Flex>

          <Text
            color="#000"
            fontFamily="Inter"
            fontSize="13.071px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            Rich Dad poor Dad
          </Text>

          <Text
            color="rgba(0, 0, 0, 0.50)"
            fontFamily="Inter"
            fontSize="13.071px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            Robert Kiyosaki
          </Text>

          <Text
            color="#9D9EA8"
            width="227.683px"
            fontSize="13.758px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="normal"
            textAlign={"center"}
          >
            “Winners are not afraid of losing. But losers are. Failure is part
            of the process of success. People who avoid failure also avoid
            success.”
          </Text>
          <DrawerDetails />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SideBarRight;

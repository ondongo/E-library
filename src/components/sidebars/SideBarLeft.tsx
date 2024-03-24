import {
  Flex,
  Box,
  Image,
  Text,
  Center,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import {
  RiDashboardLine,
  RiSettings2Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { HSeparator } from "../separator/Separator";
import Title from "../Title";
import SidebarDocs from "./SidebarCard";
import { FaSearch, FaUser, FaUserCircle } from "react-icons/fa";
import {
  AiOutlineBook,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineShareAlt,
} from "react-icons/ai";
const SidebarLeft = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (route: any) => {
    return pathname === route ? true : false;
  };

  const sidebarBgColor = useColorModeValue("#F5FBF2", "#081c15");
  const sidebarHoverBgColor = useColorModeValue("#D8E9DD", "#0D3328");

  console.log("Pathname is ", isActive(pathname));
  return (
    <Flex
      width="238px"
      direction="column"
      height="100vh"
      flexShrink="0"
      color="white"
      p={3}
      borderRadius="0px 25px 25px 0px"
      background="#118A7E"
      boxShadow="2px 0px 4px 0px rgba(0, 0, 0, 0.25)"
      position={"fixed"}
      gap={"40px"}

      //overflow={'scroll'}
    >
      <Flex alignItems="center" flexDirection="column">
        <Title size="28.005px" color="white" />
        <HSeparator />
      </Flex>

      <Flex
        gap="10px"
        align="start"
        direction={"column"}
        color="#000"
        fontFamily="Inter"
        fontSize="16px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="130%"
      >
        {[
          {
            route: "/",
            icon: <AiOutlineHome fontSize="1.5rem" />,
            label: "Accueil",
          },
          {
            route: "/search",
            icon: <AiOutlineSearch fontSize="1.5rem" />,
            label: "Recherche",
          },
          {
            route: "/contribution",
            icon: <AiOutlineShareAlt fontSize="1.5rem" />,
            label: "Contribution",
          },
          {
            route: "/favorites",
            icon: <AiOutlineHeart fontSize="1.5rem" />,
            label: "Mes favoris",
          },
          {
            route: "/readings",
            icon: <AiOutlineBook fontSize="1.5rem" />,
            label: "Mes lectures",
          },
        ].map((item, index) => (
          <Flex
            key={index}
            color="#F5FBF2"
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="normal"
            lineHeight="130%"
            alignItems="center"
          >
            <Link
              borderRadius={isActive(item.route) ? "7px 50px 50px 7px" : ""}
              background={isActive(item.route) ? "#F5FBF2" : "transparent"}
              boxShadow={
                isActive(item.route)
                  ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                  : ""
              }
              width="215px"
              height="50px"
              display="flex"
              alignItems="center"
              href={item.route}
              flexShrink="0"
              gap={"10px"}
              ml={"2"}
              px={"2"}
              fontWeight={isActive(item.route) ? 600 : 500}
              color={isActive(item.route) ? "black" : "white"}
            >
              {item.icon}
              <Text>{item.label}</Text>
            </Link>
          </Flex>
        ))}
        <Flex alignItems="center" flexDirection="column">
          <HSeparator />
        </Flex>
        <Flex
          color="#F5FBF2"
          fontFamily="Inter"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="130%"
          alignItems="center"
        >
          <Link
            display="flex"
            alignItems="center"
            href=""
            gap={"10px"}
            ml={"2"}
            px={"2"}
          >
            <FaUserCircle fontSize="2rem" />
            <Text fontWeight={600}>Profil</Text>
          </Link>
        </Flex>
      </Flex>

      <Box mt="2rem" mb="40px" borderRadius="10px">
        <SidebarDocs />
      </Box>
    </Flex>
  );
};

export default SidebarLeft;

import { Flex, Box, Image, Text, Center, Icon, Link } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiSettings2Line,
  RiLogoutBoxLine,
} from "react-icons/ri";

const SidebarLeft = () => {
  return (
    <Flex
      width="238px"
      direction="column"
      height="885px"
      flexShrink="0"
      color="white"
      p={4}
      borderRadius="0px 25px 25px 0px"
      background="rgba(60, 203, 37, 0.79)"
      boxShadow="2px 0px 4px 0px rgba(0, 0, 0, 0.25)"
      position={"fixed"}
      gap={"80px"}
    >
      <Flex>
        <Flex
          width="78.731px"
          height="78.731px"
          flexShrink="0"
          position={"relative"}
          zIndex={"10"}
        >
          <Image src="Biblio/Congo.png" alt="" />
        </Flex>

        <Flex
          borderRadius="7px 50px 50px 7px"
          background="#F5FBF2"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          width="190px"
          height="34px"
          alignItems={"center"}
          position={"absolute"}
          top={"38px"}
          right={"-12px"}
          zIndex={"8"}
          color="#312F2F"
          fontFamily="Rubik"
          fontSize="14.697px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
          justifyContent={"space-between"}
        >
          <Flex ml="10">Congo Library</Flex>
          <Image src="Biblio/red.svg" alt="" />
        </Flex>
      </Flex>
      <Flex
        gap="6"
        align="start"
        direction={"column"}
        height={"100%"}
        color="#000"
        fontFamily="Rubik"
        fontSize="16px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="130%"
      >
        <Flex
          justifyContent={"space-between"}
          borderRadius="7px 50px 50px 7px"
          background="#F5FBF2"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          width="235px"
          height="50px"
        >
          <Link display="flex" alignItems="center" href="" flexShrink="0">
            <Image src="/Biblio/Icone2.svg" alt="" ml={4} />
            <Text ml={4}>Dashboard</Text>
          </Link>
          <Image src="/Biblio/Icone1.svg" alt="" />
        </Flex>

        <Flex
          color="#F5FBF2"
          fontFamily="Rubik"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="130%"
          alignItems="center"
        >
          <Image src="/Biblio/Icone6.svg" alt="" ml={4} />

          <Link href="">
            <Text ml={4}>Categories</Text>
          </Link>
        </Flex>
        <Flex
          color="#F5FBF2"
          fontFamily="Rubik"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="130%"
          alignItems="center"
        >
          <Image src="/Biblio/audio.svg" alt="" ml={4} />
          <Link display="flex" alignItems="center" href="">
            <Text ml={4}>Livre audio</Text>
          </Link>
        </Flex>

        <Flex
          color="#F5FBF2"
          fontFamily="Rubik"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="130%"
          alignItems="center"
        >
          <Image src="/Biblio/Icone3.svg" alt="" ml={4} />
          <Link display="flex" alignItems="center" href="">
            <Text ml={4}>Favoris</Text>
          </Link>
        </Flex>

        <Flex
          color="#F5FBF2"
          fontFamily="Rubik"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="130%"
          alignItems="center"
        >
          <Image src="/Biblio/Icone4.svg" alt="" ml={4} />

          <Link display="flex" alignItems="center" href="">
            <Text ml={4}>Mes lectures</Text>
          </Link>
        </Flex>

        <Flex
          color="#F5FBF2"
          fontFamily="Rubik"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="130%"
          alignItems="center"
        >
          <Image src="/Biblio/download.svg" alt="" ml={4} />

          <Link display="flex" alignItems="center" href="">
            <Text ml={4}>Mes lectures</Text>
          </Link>
        </Flex>

        <Flex
          color="#F5FBF2"
          fontFamily="Rubik"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="130%"
          alignItems="center"
        >
          <Image src="/Biblio/Icone5.svg" alt="" ml={4} />

          <Link display="flex" alignItems="center" href="">
            <Text ml={4}>Réglages</Text>
          </Link>
        </Flex>
      </Flex>

      <Flex
        alignItems={"center"}
        color="var(--Rouge, #F33)"
        fontFamily="Rubik"
        fontSize="15px"
        fontStyle="normal"
        fontWeight="500"
        lineHeight="normal"
        gap={"4"}
      >
        <Image src="Biblio/signout.svg" alt="" ml={4} />
        <Text>Déconnexion</Text>
      </Flex>
    </Flex>
  );
};

export default SidebarLeft;

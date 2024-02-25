import { Flex, Box, Image, Text, Center, Icon, Link } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import {
  RiDashboardLine,
  RiSettings2Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { HSeparator } from "./separator/Separator";
import Title from "./Title";
import SidebarDocs from "./SidebarCard";

const SidebarLeft = () => {
  const pathname = usePathname();
  const router = useRouter();
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
        <HSeparator  />
      </Flex>

      <Flex
        justifyContent={"space-between"}
        flexDirection={"column"}
        height={"100%"}
      >
        <Flex
          gap="6"
          align="start"
          direction={"column"}
          color="#000"
          fontFamily="Inter"
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
            width="215px"
            height="50px"
          >
            <Link display="flex" alignItems="center" href="" flexShrink="0">
              <Image src="/Biblio/Icone2.svg" alt="" ml={4} />
              <Text ml={4}>Dashboard</Text>
            </Link>
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
            <Image src="/Biblio/Icone6.svg" alt="" ml={4} />

            <Link href="">
              <Text ml={4}>Recherche</Text>
            </Link>
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
            <Image src="/Biblio/audio.svg" alt="" ml={4} />
            <Link display="flex" alignItems="center" href="">
              <Text ml={4}>Livre audio</Text>
            </Link>
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
            <Image src="/Biblio/Icone6.svg" alt="" ml={4} />

            <Link href="">
              <Text ml={4}>Contribution</Text>
            </Link>
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
            <Image src="/Biblio/Icone3.svg" alt="" ml={4} />
            <Link display="flex" alignItems="center" href="">
              <Text ml={4}>Favoris</Text>
            </Link>
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
            <Image src="/Biblio/Icone4.svg" alt="" ml={4} />

            <Link display="flex" alignItems="center" href="">
              <Text ml={4}>Mes lectures</Text>
            </Link>
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
            <Image src="/Biblio/Icone5.svg" alt="" ml={4} />

            <Link display="flex" alignItems="center" href="">
              <Text ml={4}>Profil</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>


      <Box  mt='10px' mb='40px' borderRadius='10px'>
				<SidebarDocs/>
			</Box>
    </Flex>
  );
};

export default SidebarLeft;

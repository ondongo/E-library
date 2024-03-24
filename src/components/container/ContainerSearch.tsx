"use client";
import {
  Flex,
  Image,
  Text,
  useColorMode,
  Progress,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

import React, { useState } from "react";
import Navbar from "../navBar/NavbarAdmin";
import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute,
} from "@/utils/navigation";
import routes from "@/routes/routes";
import TagsDisplay from "../TagsFilters/TagsDisplay";

import CategorySearchComponent from "../searchComponents/CategorySearchComponent";
import BookList from "../book/BookList";

function ContainerSearch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components
  const { onOpen } = useDisclosure();

  return (
    <Flex
      width={"100%"}
      height={"100%"}
      marginLeft={"300px"}
      paddingTop={"10px"}
      direction={"column"}
      gap={"40px"}
    >
      <Flex gap={"10px"}>
        <Navbar
          onOpen={onOpen}
          logoText={"Horizon UI Dashboard PRO"}
          brandText={getActiveRoute(routes)}
          secondary={getActiveNavbar(routes)}
          message={getActiveNavbarText(routes)}
          fixed={fixed}
        />
      </Flex>

      <Flex direction={"column"} gap={"15px"} mt={"80px"}>
        <Flex gap={"20px"} direction={"column"}>
          {" "}
          <Flex gap={"25px"} w={"100%"}>
            <Flex flexDirection={"column"} alignItems="flex-start">
              <Text fontWeight={600} fontSize={"0.9rem"}>
                Filtrer par categorie et par étoiles
              </Text>
              <Flex flex={1} height={"100%"} w={"100%"}>
                <CategorySearchComponent />
              </Flex>
            </Flex>

            <Flex flexDirection={"column"} alignItems="flex-start">
              <Text fontWeight={600} fontSize={"0.9rem"}>
                Filtrer par date
              </Text>
              <Flex flex={1} height={"100%"} w={"100%"}>
                <Input
                  type="date"
                  display="flex"
                  //mx={2}
                  my={2}
                  flex={1}
                  background={"transparent"}
                  border={"1px solid #C3C4C8"}
                  borderRadius={"30px"}
                  lineHeight={"normal"}
                  _hover={{ background: "rgba(243,244,245)" }}
                  height={"100%"}
                  minW={"137px"}
                  fontFamily="-apple-system,Segoe UI,Helvetica,Arial,Noto Sans,Apple Color Emoji,Segoe UI Emoji"
                  fontSize="14px"
                  fontWeight="400"
                  _active={{ border: "1px solid", borderColor: "#539CD0" }}
                  _focus={{
                    background: "rgba(243,244,245)",
                    focusBorderColor: "rgba(243,244,245)",
                  }}
                />
              </Flex>
            </Flex>

            <Flex flexDirection={"column"} alignItems="flex-start">
              <Text fontWeight={600} fontSize={"0.9rem"}>
                Filtrer ceux ayant les meilleurs notes
              </Text>
              <Flex flex={1} height={"100%"} w={"100%"}>
                <CategorySearchComponent />
              </Flex>
            </Flex>
          </Flex>
          <TagsDisplay />
        </Flex>
      </Flex>

      {/* ICI Livres*/}

      <Flex direction={"column"} gap={"15px"}>
        <BookList />
      </Flex>
    </Flex>
  );
}

export default ContainerSearch;

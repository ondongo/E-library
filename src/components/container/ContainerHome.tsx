"use client";
import {
  Flex,
  Image,
  Text,
  useColorMode,
  Progress,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";

import React, { useState } from "react";
import Navbar from "../navBar/NavbarAdmin";
import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute,
} from "@/utils/navigation";
import routes from "@/routes/routes";
import { books } from "@/data/fakedatas";
import { motion } from "framer-motion";
import { BooksPopular } from "../book/PopularBooks";

function PrincipalView() {
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
      marginRight={"340px"}
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

      {/* ICI Popular */}

      <Flex direction={"column"} gap={"15px"} mt={"80px"}>
        <Flex
          color="#0F0F10"
          fontFamily="Inter"
          fontSize="23.005px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="20.704px"
        >
          Livres populaires
        </Flex>
        <Flex gap={"30px"}>
          <BooksPopular />
        </Flex>
      </Flex>

      {/* ICI Livres*/}

      <Flex direction={"column"} gap={"15px"}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", damping: 50, mass: 0.75 }}
          initial={{ opacity: 0, x: 200 * (1 + 1) }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Flex
            color="#0F0F10"
            fontFamily="Inter"
            fontSize="23.005px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="20.704px"
          >
            Livres récemments lus
          </Flex>
        </motion.div>

        <Flex flexWrap={"wrap"} width="100%" gap={"20px"}>
          {books.map((book, i) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 50, mass: 0.75 }}
              initial={{ opacity: 0, x: 200 * (i + 1) }}
              animate={{ opacity: 1, x: 0 }}
              key={i}
            >
              <a href={`/book/${book.id}`} style={{ textDecoration: "none" }}>
                <Flex
                  borderRadius="41.606px"
                  background="#FFF"
                  width="390px"
                  height="183.067px"
                  flexShrink="0"
                  p={"10px"}
                  gap={"20px"}
                >
                  <Flex
                    direction={"column"}
                    flexShrink="0"
                    alignItems={"center"}
                  >
                    <Image
                      src={book.image}
                      alt=""
                      width="93.614px"
                      height="137.301px"
                      borderRadius={"10px"}
                    />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="140"
                      height="21"
                      viewBox="0 0 140 21"
                      fill="#9D9EA8"
                    >
                      <path
                        d="M0 12.3469H139.089V19.6583C139.089 20.3477 138.53 20.9066 137.841 20.9066H1.24826C0.55887 20.9066 0 20.3477 0 19.6583V12.3469Z"
                        fill="#9D9EA8"
                      />
                      <path
                        d="M9.95944 1.72487C10.4314 1.22142 11.0907 0.935791 11.7808 0.935791H127.308C127.999 0.935791 128.658 1.22142 129.13 1.72487L139.089 12.3486H0L9.95944 1.72487Z"
                        fill="#EFEFF1"
                      />
                    </svg>
                  </Flex>
                  <Flex direction={"column"} gap={"18px"}>
                    <Text
                      color="#000"
                      fontFamily="Inter"
                      fontSize="16.642px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="normal"
                    >
                      It Ends with Us
                    </Text>

                    <Text
                      color="#9D9EA8"
                      fontFamily="Inter"
                      fontSize="13.314px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="normal"
                    >
                      :Colleen Hoover
                    </Text>

                    <Flex justifyContent={"space-between"}>
                      <Text
                        color="rgba(0, 0, 0, 0.80)"
                        fontFamily="Inter"
                        fontSize="13.314px"
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="normal"
                      >
                        180 pages
                      </Text>

                      <Text
                        color="#9D9EA8"
                        fontFamily="Inter"
                        fontSize="13.314px"
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="normal"
                      >
                        60%
                      </Text>
                    </Flex>
                    <Progress
                      colorScheme="green"
                      size="sm"
                      value={60}
                      borderRadius={"50px"}
                    />
                  </Flex>
                </Flex>
              </a>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PrincipalView;

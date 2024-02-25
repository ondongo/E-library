"use client";
import {
  Flex,
  Image,
  Text,
  useColorMode,
  Progress,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from "react";
import Navbar from "./navBar/NavbarAdmin";
import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute,
} from "@/utils/navigation";
import routes from "@/routes/routes";
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

   
      <Flex direction={"column"} gap={"15px"}  mt={"80px"}>
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
          <Flex direction={"column"} gap={"8px"}>
            <Flex
              color="#0F0F10"
              fontFamily="Inter"
              fontSize="23.005px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20.704px"
            ></Flex>
            <Image
              src="Biblio/Livre1.png"
              alt=""
              borderRadius="8.033px"
              width="165.778px"
              height="260.961px"
            />
            <Text
              color="#000"
              fontFamily="Inter"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              The Subtle Art Of....
            </Text>

            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontFamily="Inter"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              Mark Manson
            </Text>
          </Flex>

          <Flex direction={"column"} gap={"8px"}>
            <Image
              src="Biblio/Livre2.png"
              alt=""
              borderRadius="8.033px"
              width="165.778px"
              height="260.961px"
            />

            <Text
              color="#000"
              fontFamily="Inter"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              The Subtle Art Of....
            </Text>

            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontFamily="Inter"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              Mark Manson
            </Text>
          </Flex>

          <Flex direction={"column"} gap={"8px"}>
            <Flex
              width="208.85px"
              height="290.927px"
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
                width="165.778px"
                height="260.961px"
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
          </Flex>

          <Flex direction={"column"} gap={"8px"}>
            <Image
              src="Biblio/Livre3.png"
              alt=""
              borderRadius="8.033px"
              width="165.778px"
              height="260.961px"
            />

            <Text
              color="#000"
              fontFamily="Inter"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              The Subtle Art Of....
            </Text>

            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontFamily="Inter"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              Mark Manson
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* ICI Livres*/}

      <Flex direction={"column"} gap={"15px"}>
        <Flex
          color="#0F0F10"
          fontFamily="Inter"
          fontSize="23.005px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="20.704px"
        >
          Mes Livres
        </Flex>
        <Flex flexWrap={"wrap"} width="750px" gap={"20px"}>
          <Flex
            borderRadius="41.606px"
            background="#FFF"
            width="343.667px"
            height="183.067px"
            flexShrink="0"
            p={"10px"}
            gap={"20px"}
          >
            <Flex direction={"column"} flexShrink="0" alignItems={"center"}>
              <Image
                src="Biblio/book.png"
                alt=""
                width="93.614px"
                height="137.301px"
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

          <Flex
            borderRadius="41.606px"
            background="#FFF"
            width="343.667px"
            height="183.067px"
            flexShrink="0"
            p={"10px"}
            gap={"20px"}
          >
            <Flex direction={"column"} flexShrink="0" alignItems={"center"}>
              <Image
                src="Biblio/book.png"
                alt=""
                width="93.614px"
                height="137.301px"
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
                  80%
                </Text>
              </Flex>
              <Progress
                colorScheme="yellow"
                size="sm"
                value={60}
                borderRadius={"50px"}
              />
            </Flex>
          </Flex>

          <Flex
            borderRadius="41.606px"
            background="#FFF"
            width="343.667px"
            height="183.067px"
            flexShrink="0"
            p={"10px"}
            gap={"20px"}
          >
            <Flex direction={"column"} flexShrink="0" alignItems={"center"}>
              <Image
                src="Biblio/book.png"
                alt=""
                width="93.614px"
                height="137.301px"
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
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PrincipalView;

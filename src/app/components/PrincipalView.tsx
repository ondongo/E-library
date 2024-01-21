import {
  Flex,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  HStack,
  Icon,
  Switch,
  Text,
  useColorMode,
  Progress,
} from "@chakra-ui/react";

import React from "react";
import { RiSearch2Fill } from "react-icons/ri";
import SidebarLeft from "./SideBarLeft";
import { FaSun, FaMoon } from "react-icons/fa";

function PrincipalView() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      marginLeft={"320px"}
      paddingTop={"10px"}
      direction={"column"}
      gap={"40px"}
    >
      <Flex gap={"10px"}>
        <InputGroup
          borderRadius="7px"
          background="#E7EDF6"
          fontFamily="Rubik"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="normal"
          width="447px"
          height="56px"
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
        >
          <InputLeftElement
            pointerEvents="none"
            alignItems={"center"}
            display={"flex"}
            justifyContent={"center"}
            height={"100%"}
          >
            <Image src="Biblio/search.svg" alt="" />
          </InputLeftElement>
          <Input
            placeholder="Rechercher un livre"
            color="gray"
            width="447px"
            height="56px"
            focusBorderColor="#3CCB25"
            _placeholder={{ color: "#3CCB25" }}
          />
        </InputGroup>

        <Flex
          borderRadius="40px"
          background="#E7EDF6"
          width="105px"
          flexShrink="0"
          padding={"10px"}
          alignItems={"center"}
          gap={"10px"}
          height="47px"
          mt={"10px"}
        >
          <Flex
            alignItems={"center"}
            width="34px"
            height="34px"
            flexShrink="0"
            bg={isDarkMode ? "none" : "#FFF"}
            borderRadius={"50px"}
            p={"5px"}
            as={"button"}
            onClick={toggleColorMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill={isDarkMode ? "#D9D9D9" : "#3CCB25"}
            >
              <path
                d="M14 0C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4C13.7348 4 13.4804 3.89464 13.2929 3.70711C13.1054 3.51957 13 3.26522 13 3V1C13 0.734784 13.1054 0.48043 13.2929 0.292893C13.4804 0.105357 13.7348 0 14 0ZM14 21C15.8565 21 17.637 20.2625 18.9497 18.9497C20.2625 17.637 21 15.8565 21 14C21 12.1435 20.2625 10.363 18.9497 9.05025C17.637 7.7375 15.8565 7 14 7C12.1435 7 10.363 7.7375 9.05025 9.05025C7.7375 10.363 7 12.1435 7 14C7 15.8565 7.7375 17.637 9.05025 18.9497C10.363 20.2625 12.1435 21 14 21ZM14 19C12.6739 19 11.4021 18.4732 10.4645 17.5355C9.52678 16.5979 9 15.3261 9 14C9 12.6739 9.52678 11.4021 10.4645 10.4645C11.4021 9.52678 12.6739 9 14 9C15.3261 9 16.5979 9.52678 17.5355 10.4645C18.4732 11.4021 19 12.6739 19 14C19 15.3261 18.4732 16.5979 17.5355 17.5355C16.5979 18.4732 15.3261 19 14 19ZM27 15C27.2652 15 27.5196 14.8946 27.7071 14.7071C27.8946 14.5196 28 14.2652 28 14C28 13.7348 27.8946 13.4804 27.7071 13.2929C27.5196 13.1054 27.2652 13 27 13H25C24.7348 13 24.4804 13.1054 24.2929 13.2929C24.1054 13.4804 24 13.7348 24 14C24 14.2652 24.1054 14.5196 24.2929 14.7071C24.4804 14.8946 24.7348 15 25 15H27ZM14 24C14.2652 24 14.5196 24.1054 14.7071 24.2929C14.8946 24.4804 15 24.7348 15 25V27C15 27.2652 14.8946 27.5196 14.7071 27.7071C14.5196 27.8946 14.2652 28 14 28C13.7348 28 13.4804 27.8946 13.2929 27.7071C13.1054 27.5196 13 27.2652 13 27V25C13 24.7348 13.1054 24.4804 13.2929 24.2929C13.4804 24.1054 13.7348 24 14 24ZM3 15C3.26522 15 3.51957 14.8946 3.70711 14.7071C3.89464 14.5196 4 14.2652 4 14C4 13.7348 3.89464 13.4804 3.70711 13.2929C3.51957 13.1054 3.26522 13 3 13H1C0.734784 13 0.48043 13.1054 0.292893 13.2929C0.105357 13.4804 0 13.7348 0 14C0 14.2652 0.105357 14.5196 0.292893 14.7071C0.48043 14.8946 0.734784 15 1 15H3ZM3.293 3.294C3.48053 3.10653 3.73484 3.00121 4 3.00121C4.26516 3.00121 4.51947 3.10653 4.707 3.294L6.707 5.294C6.88916 5.4826 6.98995 5.7352 6.98767 5.9974C6.9854 6.2596 6.88023 6.51041 6.69482 6.69582C6.50941 6.88123 6.2586 6.9864 5.9964 6.98867C5.7342 6.99095 5.4816 6.89016 5.293 6.708L3.293 4.708C3.10553 4.52047 3.00021 4.26616 3.00021 4.001C3.00021 3.73584 3.10553 3.48153 3.293 3.294ZM4.707 24.708C4.5184 24.8902 4.2658 24.991 4.0036 24.9887C3.7414 24.9864 3.49059 24.8812 3.30518 24.6958C3.11977 24.5104 3.0146 24.2596 3.01233 23.9974C3.01005 23.7352 3.11084 23.4826 3.293 23.294L5.293 21.294C5.4816 21.1118 5.7342 21.011 5.9964 21.0133C6.2586 21.0156 6.50941 21.1208 6.69482 21.3062C6.88023 21.4916 6.9854 21.7424 6.98767 22.0046C6.98995 22.2668 6.88916 22.5194 6.707 22.708L4.707 24.708ZM24.707 3.294C24.5195 3.10653 24.2652 3.00121 24 3.00121C23.7348 3.00121 23.4805 3.10653 23.293 3.294L21.293 5.294C21.1108 5.4826 21.01 5.7352 21.0123 5.9974C21.0146 6.2596 21.1198 6.51041 21.3052 6.69582C21.4906 6.88123 21.7414 6.9864 22.0036 6.98867C22.2658 6.99095 22.5184 6.89016 22.707 6.708L24.707 4.708C24.8945 4.52047 24.9998 4.26616 24.9998 4.001C24.9998 3.73584 24.8945 3.48153 24.707 3.294ZM21.293 22.708L23.293 24.708C23.4816 24.8902 23.7342 24.991 23.9964 24.9887C24.2586 24.9864 24.5094 24.8812 24.6948 24.6958C24.8802 24.5104 24.9854 24.2596 24.9877 23.9974C24.99 23.7352 24.8892 23.4826 24.707 23.294L22.707 21.294C22.5184 21.1118 22.2658 21.011 22.0036 21.0133C21.7414 21.0156 21.4906 21.1208 21.3052 21.3062C21.1198 21.4916 21.0146 21.7424 21.0123 22.0046C21.01 22.2668 21.1108 22.5194 21.293 22.708Z"
                fill={isDarkMode ? "#D9D9D9" : "#3CCB25"}
              />
            </svg>
          </Flex>

          <Flex
            alignItems={"center"}
            width="34px"
            height="34px"
            flexShrink="0"
            borderRadius={"50px"}
            p={"8px"}
            bg={isDarkMode ? "#FFF" : "none"}
            as={"button"}
            onClick={toggleColorMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill={isDarkMode ? "#3CCB25" : "#D9D9D9"}
            >
              <path d="M8.84723 3.48611C8.59636 4.38591 8.47018 5.31588 8.47223 6.25C8.47223 11.9167 13.0833 16.5278 18.75 16.5278C19.6944 16.5278 20.625 16.4028 21.5139 16.1528C20.7843 17.9454 19.5373 19.4801 17.9319 20.5611C16.3265 21.6421 14.4354 22.2204 12.5 22.2222C7.13889 22.2222 2.77778 17.8611 2.77778 12.5C2.77778 8.43055 5.29167 4.93055 8.84723 3.48611ZM12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71645C0.00541599 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 11.8611 24.9444 11.2222 24.8611 10.6111C24.1671 11.5842 23.2502 12.377 22.187 12.9231C21.1238 13.4692 19.9452 13.7528 18.75 13.75C17.16 13.75 15.6111 13.245 14.3267 12.3079C13.0422 11.3707 12.0887 10.0497 11.6035 8.53556C11.1184 7.0214 11.1267 5.39226 11.6273 3.88313C12.1279 2.37401 13.0949 1.06289 14.3889 0.138889C13.7778 0.0555554 13.1389 0 12.5 0Z" />
            </svg>
          </Flex>
        </Flex>

        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          ml={"18px"}
          mt={"10px"}
        >
          <Text
            color="#000"
            fontFamily="Rubik"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="800"
            lineHeight="normal"
          >
            28 October 2023
          </Text>
        </Flex>
      </Flex>

      {/* ICI Popular */}

      <Flex direction={"column"} gap={"15px"}>
        <Flex
          color="#0F0F10"
          fontFamily="Rubik"
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
              fontFamily="Rubik"
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
              fontFamily="Rubik"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              The Subtle Art Of....
            </Text>

            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontFamily="Rubik"
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
              fontFamily="Rubik"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              The Subtle Art Of....
            </Text>

            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontFamily="Rubik"
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
              background="RGB(43, 206, 137)"
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
              fontFamily="Rubik"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              Rich Dad poor Dad
            </Text>

            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontFamily="Rubik"
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
              fontFamily="Rubik"
              fontSize="13.071px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
            >
              The Subtle Art Of....
            </Text>

            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontFamily="Rubik"
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
          fontFamily="Rubik"
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
                fontFamily="Rubik"
                fontSize="16.642px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
              >
                It Ends with Us
              </Text>

              <Text
                color="#9D9EA8"
                fontFamily="Rubik"
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
                  fontFamily="Rubik"
                  fontSize="13.314px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="normal"
                >
                  180 pages
                </Text>

                <Text
                  color="#9D9EA8"
                  fontFamily="Rubik"
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
                fontFamily="Rubik"
                fontSize="16.642px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
              >
                It Ends with Us
              </Text>

              <Text
                color="#9D9EA8"
                fontFamily="Rubik"
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
                  fontFamily="Rubik"
                  fontSize="13.314px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="normal"
                >
                  180 pages
                </Text>

                <Text
                  color="#9D9EA8"
                  fontFamily="Rubik"
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
                fontFamily="Rubik"
                fontSize="16.642px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
              >
                It Ends with Us
              </Text>

              <Text
                color="#9D9EA8"
                fontFamily="Rubik"
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
                  fontFamily="Rubik"
                  fontSize="13.314px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="normal"
                >
                  180 pages
                </Text>

                <Text
                  color="#9D9EA8"
                  fontFamily="Rubik"
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

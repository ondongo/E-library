import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function Title({ size, color1 }: any) {
  return (
    <Flex
      my="32px"
      fontFamily="Inter"
      fontSize={size}
      fontStyle="normal"
      fontWeight="600"
      lineHeight="20.704px"
      alignItems={"center"}
      gap={"4px"}
    >
      <Text color={color1}>E -</Text>

      <Text color="rgba(0, 0, 0, 0.63)">Library</Text>
    </Flex>
  );
}

export default Title;

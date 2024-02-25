import {
  useRadio,
  Box,
  useRadioGroup,
  HStack,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <HStack as="label">
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="30px"
          boxShadow="md"
          _checked={{
            bg: "#CAE2F2",
            color: "#2E5881",
            borderColor: "#C4E3F4",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
          minH="42px"
          maxH="42px"
          minW="120px"
          maxW="120px"
          display={"flex"}
          alignItems={"center"}
          fontWeight="700"
          gap={"3px"}
        >
          {props.children.score}{" "}
          <Flex
            height="10px"
            width="10px"
            margin="0 2px"
            backgroundColor={props.isChecked ? "#2E5881" : "#4E5460"}
            borderRadius="50%"
            display="inline-block"
          ></Flex>
        </Box>
      </Box>
    </HStack>
  );
}

export const RadioCustomHorizontal = ({
  onRadioChange,
}: {
  onRadioChange: (value: string) => void;
}) => {
  const options = [
    { score: "0-1" },
    { score: "2" },
    { score: "3" },
    { score: "4" },
    { score: "5" },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "scores",
    onChange: onRadioChange,
  });

  const group = getRootProps();

  return (
    <Flex direction={"row"} gap={"10px"} {...group}>
      {options.map((option) => {
        const radio = getRadioProps({ value: option.score });
        return (
          <RadioCard key={option.score} {...radio}>
            {option}
          </RadioCard>
        );
      })}
    </Flex>
  );
};

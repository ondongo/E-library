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
import { IoCalendar } from "react-icons/io5";

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
          fontSize="0.8rem"
          py={"0.4rem"}
          px={"1.6rem"}
          minH="32px"
          maxH="32px"
          minW="120px"
          maxW="auto"
          display={"flex"}
          alignItems={"center"}
          fontWeight="700"
          gap={"5px"}
          mb={5} 
          
        >
           <IoCalendar /> {props.children.plage}{" "}
        </Box>
      </Box>
    </HStack>
  );
}

export const RadioDateComponent = ({
  onRadioChange,
}: {
  onRadioChange: (value: string) => void;
}) => {
  const options = [
    { plage: "Ce soir" },
    { plage: "Demain soir" },
    { plage: "Ce week-end" },
    { plage: "Le week-end prochain" },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "plages",
    onChange: onRadioChange,
  });

  const group = getRootProps();

  return (
    <Flex direction={"row"} gap={"10px"} {...group}>
      {options.map((option) => {
        const radio = getRadioProps({ value: option.plage });
        return (
          <RadioCard key={option.plage} {...radio}>
            {option}
          </RadioCard>
        );
      })}
    </Flex>
  );
};

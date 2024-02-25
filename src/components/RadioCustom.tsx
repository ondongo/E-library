import {
  useRadio,
  Box,
  useRadioGroup,
  HStack,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";


// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <HStack as="label" >
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="2px"
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
          minH="35px"
          maxH="35px"
          minW="80px"
          maxW="80px"
          display={"flex"}
          alignItems={"center"}
          fontWeight="bold"
        >
          {props.children.score}
        </Box>
      </Box>

      <Text fontSize="md" _checked={{ fontWeight: "bold" }}>
        {props.children.description}
      </Text>
    </HStack>
  );
}

export default function RadioCustom() {
  const options = [
    { score: "8,5+", description: "Excellent" },
    { score: "8,0+", description: "Très bien" },
    { score: "7,5+", description: "Bien" },
    { score: "7,0+", description: "Convenable" },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "scores",
    defaultValue: "8,5+",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Flex direction={"column"} gap={"10px"} {...group}  mb={14}>
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
}

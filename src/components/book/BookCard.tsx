import { Flex, Image, Text } from "@chakra-ui/react";

export default function BookCard({
  title,
  description,
  coverImage,
  onClick,
}: any) {
  return (
    <Flex style={cardStyle} onClick={onClick} direction={"column"}>
      <Image src={coverImage} alt={title} style={imageStyle} />
      <Flex style={contentStyle} direction={"column"} gap={"10px"}>
        <Text
          color="#000"
          fontFamily="Inter"
          fontSize="13.071px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
        >
          {title}
        </Text>
        <Text
          color="rgba(0, 0, 0, 0.50)"
          fontFamily="Inter"
          fontSize="13.071px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}

const cardStyle = {
  width: "200px",
  height:"300px",
  padding: "1rem",
  borderRadius: "5px",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  marginBottom: "1.5rem",
  marginRight: "1rem",
};

const imageStyle = {
  width: "100%",
  aspectRatio: 1,
  borderRadius: "5px",
};

const contentStyle = {
  marginTop: "1rem",
};

const titleStyle = {
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  color: "#000",
};

const descriptionStyle = {
  fontSize: "0.8rem",
  color: "#888",
};

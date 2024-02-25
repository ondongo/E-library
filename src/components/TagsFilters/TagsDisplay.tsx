"use client";
import { useTagsFilters } from "@/providers/TagProvider";
import {
  Box,
  Text,
  IconButton,
  Tag,
  TagCloseButton,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

function TagsDisplay() {
  const { tags, removeTag } = useTagsFilters();

  return (
    <Wrap>
      {tags.map((tag) => (
        <WrapItem key={tag.id}>
          <Tag
            size="lg"
            borderRadius="full"
            px={3}
            py={1}
            //variant="solid"
            display="inline-flex"
            alignItems="center"
            minW={"120px"}
            minH={"40px"}
            maxH={"40px"}
            background="#C4E3F4"
            m={1}
            color="#2E5881"
            fontWeight={"bold"}
          >
            <TagLabel color="#2E5881">{tag.text}</TagLabel>

            <TagLabel color="#2E5881">
              {tag.category === "radioCategory" ? "étoiles" : ""}
            </TagLabel>
            <TagCloseButton
              onClick={() => removeTag(tag.id)}
              color="#2E5881"
              ml={"auto"}
            />
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default TagsDisplay;

import React from "react";
import { useTagsFilters } from "@/providers/TagProvider"; // Assurez-vous que le chemin d'importation est correct
import { Button, Text, Flex } from "@chakra-ui/react";

function CounterCategoryTags() {
  const { filtersCountByCategory } = useTagsFilters();

  const radioFiltersCount = filtersCountByCategory["radioCategory"] || 0;
  const checkBoxFiltersCount = filtersCountByCategory["checkBoxCategory"] || 0;

  const totalFiltersCount = radioFiltersCount + checkBoxFiltersCount;

  return (
    <>
      {totalFiltersCount > 0 ? (
        <Flex alignItems="center">
          <Text
            as="span"
            borderRadius="full"
            background="#C4E3F4"
            color="#2E5881"
            px={2}
            py={1}
            mr={2}
          >
            {totalFiltersCount}
          </Text>
          <Text
            as="span"
            style={{
              maxWidth: "12ch",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Filtres appliqués
          </Text>
        </Flex>
      ) : (
        <Text fontWeight={"bold"} fontSize={"1em"}>
          Choisir
        </Text>
      )}
    </>
  );
}

export default CounterCategoryTags;

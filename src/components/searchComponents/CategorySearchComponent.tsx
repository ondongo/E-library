"use client";
import useHoverMenu from "@/hooks/useHoverMenu";
import {
  Checkbox,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import RadioCustom from "../RadioCustom";

import { useTagsFilters } from "@/providers/TagProvider";
import { useState } from "react";
import CounterCategoryTags from "../TagsFilters/CounterCategoryTags";
import { RadioCustomHorizontal } from "../Radio/RadioCustomHorizontal";
import FooterFilters from "./FooterFilters";

function CategorySearchComponent() {
  const { menuOpen, buttonRef, listRef, openMenu, handleMouseLeave } =
    useHoverMenu();

  const { addFilter, removeFilter, tags } = useTagsFilters();

  const [selectedRadio, setSelectedRadio] = useState<any>();

  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setSelectedCheckboxes((current) => {
      if (current.includes(value)) {
        return current.filter((item) => item !== value);
      } else {
        return [...current, value];
      }
    });
  };
  const applyFilters = () => {
    console.log(`Application des filtres : ${selectedCheckboxes.join(", ")}`);

    selectedCheckboxes.forEach((value) => {
      const filter = { category: "checkBoxCategory", value };
      if (
        !tags.some((tag) => tag.id === `${filter.category}:${filter.value}`)
      ) {
        addFilter(filter);
      }
    });

    if (
      selectedRadio &&
      !tags.some((tag) => tag.id === `radioCategory:${selectedRadio}`)
    ) {
      console.log(`Application du filtre radio : ${selectedRadio}`);
      const filter = { category: "radioCategory", value: selectedRadio };
      addFilter(filter);
    }

    setSelectedCheckboxes([]);
    setSelectedRadio("");
  };

  const checkboxes = [
    { value: "annulation-gratuite", label: "Annulation gratuite" },
    { value: "petit-dejeuner-inclus", label: "Petit-déjeuner inclus" },
    { value: "tout-compris", label: "Tout compris" },
    { value: "piscine", label: "Piscine" },
    { value: "wifi", label: "Wi-Fi" },
    { value: "parking", label: "Parking" },
    { value: "climatisation", label: "Climatisation" },
    { value: "cuisine", label: "Cuisine" },
    { value: "restaurant", label: "Restaurant" },
    { value: "animaux-acceptes", label: "Animaux acceptés" },
    { value: "familles", label: "Familles" },
    { value: "payer-hebergement", label: "Payer à l’hébergement" },
    { value: "bains-remous", label: "Bains à remous" },
    { value: "spa", label: "Spa" },
    { value: "salle-fitness", label: "Salle de fitness" },
    { value: "acces-handicapes", label: "Accès handicapés" },
    { value: "demi-pension", label: "Demi-pension" },
    { value: "pension-complete", label: "Pension complète" },
  ];

  return (
    <>
      <Menu
      //isOpen={menuOpen}
      >
        <MenuButton
          /*     ref={buttonRef}
          onMouseEnter={openMenu}
          onMouseLeave={handleMouseLeave} */
          display="flex"
          //mx={2}
          my={2}
          flex={1}
          background={"transparent"}
          border={"1px solid #C3C4C8"}
          borderRadius={"30px"}
          lineHeight={"normal"}
          _hover={{ background: "rgba(243,244,245)" }}
          height={"100%"}
          minW={"137px"}
          fontFamily="-apple-system,Segoe UI,Helvetica,Arial,Noto Sans,Apple Color Emoji,Segoe UI Emoji"
          fontSize="14px"
          fontWeight="400"
          /*   _expanded={{
            background: "rgba(243,244,245)",
            color: "black",
            border: "1px solid",
            borderColor: "#539CD0",
          }} */
          _active={{ border: "1px solid", borderColor: "#539CD0" }}
          _focus={{
            background: "rgba(243,244,245)",
            focusBorderColor: "rgba(243,244,245)",
          }}
        >
          <Flex justifyContent={"space-between"} px={3} alignItems={"center"}>
            <CounterCategoryTags />

            {menuOpen == true ? <FaChevronUp /> : <FaChevronDown />}
          </Flex>
        </MenuButton>

        <MenuList
          minW="39.75rem"
          p={4}
          zIndex={5000}
          /*   ref={listRef}
          onMouseEnter={openMenu}
          onMouseLeave={handleMouseLeave} */
        >
          <Flex gap={"10px"} direction={"column"} px={2} w={"100%"} mb={20}>
            <Text fontWeight={"bold"} fontSize={"1em"}>
              Categories
            </Text>

            <RadioCustomHorizontal onRadioChange={setSelectedRadio} />

            <Text fontWeight={"bold"} fontSize={"1rem"}>
              Filtres Populaires
            </Text>

            <Flex
              direction={["column"]}
              flexWrap={"wrap"}
              maxW={"100%"}
              gap={"5px"}
              maxH={"400px"}
              minH={"400px"}
            >
              {checkboxes.map(({ value, label }) => (
                <Flex
                  p={1}
                  key={value}
                  minW="50%"
                  borderColor="#C3C4C8"
                  _hover={{
                    background: "rgba(243,244,245)",
                    color: "black",
                    border: "1px solid transparent",
                    borderRadius: "5px",
                  }}
                  whiteSpace={"nowrap"}
                >
                  <Checkbox
                    key={value}
                    isChecked={selectedCheckboxes.includes(value)}
                    onChange={() => handleCheckboxChange(value)}
                    borderColor="#C3C4C8"
                  >
                    <Text fontSize={"0.9rem"}>{label}</Text>
                  </Checkbox>
                </Flex>
              ))}
            </Flex>
          </Flex>

          <FooterFilters applyFilters={applyFilters} />
        </MenuList>
      </Menu>
    </>
  );
}

export default CategorySearchComponent;

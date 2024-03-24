"use client";
import React, { useCallback, useRef } from "react";
import SidebarLeft from "../../components/sidebars/SideBarLeft";
import { Button, Flex, Text } from "@chakra-ui/react";

import TagsDisplay from "@/components/TagsFilters/TagsDisplay";
import ContainerSearch from "@/components/container/ContainerSearch";
import "./style.css";
import SideBarRight from "@/components/sidebars/SideBarRight";
function page() {
  return (
    <Flex width="auto" height={"auto"} background={"#F5FBF2"}>
      <Flex width={"100%"}>
        <SidebarLeft />
        <ContainerSearch />
      </Flex>
    </Flex>
  );
}

export default page;

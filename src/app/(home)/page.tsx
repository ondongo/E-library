"use client";
import React from "react";
import SidebarLeft from "./components/SideBarLeft";
import { Flex } from "@chakra-ui/react";
import PrincipalView from "./components/PrincipalView";
import "./style.css";

function Page() {
  return (
    <Flex width="auto" height={"auto"} background={"#F5FBF2"}>
      <Flex width={"100%"}>
        <SidebarLeft />
        <PrincipalView />
      </Flex>
    </Flex>
  );
}

export default Page;

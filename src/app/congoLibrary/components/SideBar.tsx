"use client"
import { Box, Text, VStack, Link, Icon } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiSettings2Line,
  RiLogoutBoxLine,
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <Box width="250px" height="100%" bg="gray.800" color="white" p={4}>
      <VStack spacing={4} align="start">
        <Link display="flex" alignItems="center">
          <Icon as={RiDashboardLine} />
          <Text ml={2}>Dashboard</Text>
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={RiSettings2Line} />
          <Text ml={2}>Settings</Text>
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={RiLogoutBoxLine} />
          <Text ml={2}>Logout</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;

import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React from "react";

function EllipseProgress({ value, max }: any) {
  return (
    <CircularProgress
      value={value}
      color="green.400"
      size="75px"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgressLabel
        color="RGB(43, 206, 137)"
        fontSize="14.697px"
        font-style="normal"
        font-weight="500"
      >
        {value}/{max}
      </CircularProgressLabel>
    </CircularProgress>
  );
}

export default EllipseProgress;

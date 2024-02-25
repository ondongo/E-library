import { extendTheme, HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { inputStyles } from "./input";
import { buttonStyles } from "./button";

export default extendTheme(globalStyles, inputStyles, buttonStyles);

export interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}

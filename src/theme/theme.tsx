import { extendTheme, HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { inputStyles } from "./input";
import { buttonStyles } from "./button";
import { CardComponent } from "./additions/card/card";

export default extendTheme(
  globalStyles,
  inputStyles,
  buttonStyles,
  CardComponent
); // card component);

export interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}

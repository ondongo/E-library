import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#108A7E",
      200: "#208A7E",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "Inter",
        letterSpacing: "-0.5px",
      },

      html: {
        fontFamily: "Inter",
      },
    }),
  },
};

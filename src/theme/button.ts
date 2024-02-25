import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
      },
      variants: {
        outline: () => ({
          borderRadius: "8px",
        }),
        brand: (props: StyleFunctionProps) => ({
          bg: mode("brand.100", "brand.200")(props),
          color: "white",
          _focus: {
            bg: mode("brand.200", "brand.100")(props),
          },
          _active: {
            bg: mode("brand.200", "brand.100")(props),
          },
          _hover: {
            bg: mode("brand.200", "brand.100")(props),
          },
        }),
     
        action: (props: StyleFunctionProps) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("secondaryGray.300", "brand.400")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "brand.400")(props),
          },
          _active: { bg: mode("secondaryGray.300", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.200", "brand.400")(props),
          },
        }),
      
      },
    },
  },
};

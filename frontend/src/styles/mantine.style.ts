import { MantineThemeOverride } from "@mantine/core";

export default <MantineThemeOverride>{
  colors: {
    victoria: [
      "#FEF4DC",
      "#FDE8B4",
      "#FBDA89",
      "#F5C84E",
      "#EAAF22",
      "#CE9B16",
      "#B28512",
      "#95700E",
      "#785A0A",
      "#5C4507",
    ],
  },
  primaryColor: "victoria",
  components: {
    Modal: {
      styles: (theme) => ({
        title: {
          fontSize: theme.fontSizes.lg,
          fontWeight: 700,
        },
      }),
    },
  },
};

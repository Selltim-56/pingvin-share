import { MantineThemeOverride } from "@mantine/core";

export default <MantineThemeOverride>{
  colors: {
    victoria: [
      "#fce7f3",
      "#fbcfe8",
      "#f9a8d4",
      "#f472b6",
      "#ec4899",
      "#db2777",
      "#be185d",
      "#9d174d",
      "#831843",
      "#500724",
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

import { TypographyVariants as TypographyVariantsOption } from "@mui/material/styles";
import {
  Roboto,
  Merriweather,
  DM_Sans,
  Montserrat,
  Mulish,
} from "next/font/google";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const mulish = Mulish({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export interface TypographyVariants extends TypographyVariantsOption {}

export default {
  fontFamily: ` ${montserrat.style.fontFamily}, ${mulish.style.fontFamily}`,
  htmlFontSize: 16,
  fontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    ...montserrat.style,
    fontWeight: 400,
    fontSize: "6rem",
    lineHeight: 1.2,
    letterSpacing: "-0.01562em",
  },
  h2: {
    ...montserrat.style,
    fontWeight: 400,
    fontSize: "3.75rem",
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
  },
  h3: {
    ...montserrat.style,
    fontWeight: 800,
    fontSize: "1.875rem",
    lineHeight: 1.2,
    letterSpacing: "0.03125em",
  },
  h4: {
    ...montserrat.style,
    fontWeight: 700,
    fontSize: "1.125rem",
    lineHeight: 1.2,
    letterSpacing: "0.03125em",
  },
  h5: {
    ...montserrat.style,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.2,
    letterSpacing: "0em",
  },
  h6: {
    ...montserrat.style,
    fontWeight: 800,
    fontSize: "1.875rem",
    lineHeight: 1.2,
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    ...montserrat.style,
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: "0.00938em",
  },
  subtitle2: {
    ...montserrat.style,
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.57,
    letterSpacing: "0.00714em",
  },
  body1: {
    ...montserrat.style,
    fontWeight: 500,
    fontSize: "0.9375rem",
    lineHeight: 1.875,
    letterSpacing: "0.03125em",
  },
  body2: {
    ...mulish.style,
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.875,
    letterSpacing: "0.03125em",
  },
  button: {
    ...montserrat.style,
    fontWeight: 500,
    fontSize: "0.75rem",
    lineHeight: 1.75,
    letterSpacing: "0.03125em",
    textTransform: "uppercase",
  },
  caption: {
    ...montserrat.style,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  },
  overline: {
    ...montserrat.style,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 2.66,
    letterSpacing: "0.08333em",
    textTransform: "uppercase",
  },
} as TypographyVariants;

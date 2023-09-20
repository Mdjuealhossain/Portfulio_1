import { Theme, Components } from "@mui/material/styles";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {}
}

const MuiPaper: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      ...(!ownerState.square && {
        borderRadius: theme.spacing(1),
      }),
    }),
  },
};

export default { MuiPaper };

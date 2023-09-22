import { Theme, Components } from "@mui/material/styles";

const MuiBackdrop: Components<Theme>["MuiBackdrop"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      background: "transparent",
    }),
  },
};

export default { MuiBackdrop };

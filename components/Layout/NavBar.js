import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarRoot } from "../../styles/metarialStyle";

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import {
  MenuButton,
  MenuCircleButton,
  MenuCircleImageButton,
} from "./Layout.Styles";

export const NavBar = ({ sidebartoggle }) => {
  return (
    <>
      <NavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={sidebartoggle}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
                color: "black",
              },
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <MenuButton>All Ads</MenuButton>
          <MenuButton>All Product</MenuButton>
          <MenuButton>All Order</MenuButton>
          <MenuCircleButton style={{ marginLeft: "auto" }}>EN</MenuCircleButton>

          <MenuCircleImageButton>
            <ForwardToInboxIcon fontSize="small" />
          </MenuCircleImageButton>

          <MenuButton>Post Add</MenuButton>

          <MenuCircleImageButton>
            <ArrowDropDownSharpIcon fontSize="small" />
          </MenuCircleImageButton>
        </Toolbar>
      </NavbarRoot>
    </>
  );
};

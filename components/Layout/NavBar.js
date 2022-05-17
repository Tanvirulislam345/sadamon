import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarRoot } from "../../styles/metarialStyle";

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import { MenuButton, MenuCircleButton, MenuCircleImageButton } from "./Layout.Styles";

// import styled from "styled-components";
// const MenuButton = styled.div`
//   color: #343c44;
//   border-radius: 8px;
//   padding: 8px 12px;
//   margin: 22px 0px;
//   margin-right: 30px;
//   font-family: Metropolis;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 16px;

//   background: #fbfbfb;
//   box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04),
//     0px 2px 4px rgba(52, 60, 68, 0.16);
// `;

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

import { Toolbar } from "@mui/material";
import { NavbarRoot } from "../../styles/metarialStyle";
import {
  AppBarContainer,
  MenuPlainButtonContainer,
  MenuPlainText,
} from "./Layout.Styles";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";
import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";
// import {
//   AppBarContainer,
//   MenuPlainButtonContainer,
//   MenuPlainText,
// } from "../../styles/MenuStyle";

export const NavBar2 = ({ sidebartoggle }) => {
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
          top: 77,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
            color: "#343C44",
          }}
        >
          <AppBarContainer>
            <MenuPlainButtonContainer>
              <WidgetsSharpIcon />
              <MenuPlainText>All Categori</MenuPlainText>
            </MenuPlainButtonContainer>
            <MenuPlainButtonContainer>
              <AddLocationSharpIcon />
              <MenuPlainText>Location</MenuPlainText>
            </MenuPlainButtonContainer>
            <MenuPlainButtonContainer>
              <AddLocationSharpIcon />
              <MenuPlainText>Location</MenuPlainText>
            </MenuPlainButtonContainer>
          </AppBarContainer>
        </Toolbar>
      </NavbarRoot>
    </>
  );
};

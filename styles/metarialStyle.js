import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

export const LayoutRoot = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   flex: "1 1 auto",
  //   maxWidth: "100%",
  width: {
    lg: "calc(100% - 280px)",
  },
  height: "calc(100vh - 64px)",
  overflow: "auto",
  paddingTop: "64px",
  background: theme.background.primary,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const LayoutContiner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.background.secondary,
  margin: "30px",
  padding: "0px 30px 30px",
  borderRadius: "15px",
}));

export const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  boxShadow: theme.shadows[1],
  borderBottom: "1px solid gray",
}));

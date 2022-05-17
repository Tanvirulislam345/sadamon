import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useState } from "react";
import { NavBar } from "./NavBar";
import SideBar from "./SideBar";
import { NavBar2 } from "./NavBar2";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  width: "100%",
  paddingTop: 145,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardLayoutRoot>
      <NavBar sidebartoggle={() => setSidebarOpen(!isSidebarOpen)} />
      <NavBar2 sidebartoggle={() => setSidebarOpen(!isSidebarOpen)} />
      <SideBar
        onClose={() => setSidebarOpen(!isSidebarOpen)}
        open={isSidebarOpen}
      />
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          maxWidth: "500px",
          width: "100%",
          padding: "20px 0px",
        }}
      >
        {children}
      </Box>
    </DashboardLayoutRoot>
  );
};

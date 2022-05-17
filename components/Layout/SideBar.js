import { Box, Drawer, useMediaQuery } from "@mui/material";
import { NavItem } from "./NavItem";
// import {
//   FaHome,
//   FaProjectDiagram,
//   FaDonate,
//   FaUserSecret,
//   FaUsers,
//   FaDollyFlatbed,
// } from "react-icons/fa";
import StorefrontIcon from '@mui/icons-material/Storefront';

const items = [
  {
    href: "/",
    icon: <StorefrontIcon fontSize="small" />,
    title: "sell",
  },
  {
    href: "/rent",
    icon: <StorefrontIcon fontSize="small" />,
    title: "Rent",
  },
  {
    href: "/job",
    icon: <StorefrontIcon fontSize="small" />,
    title: "Job",
  },
  {
    href: "/bid",
    icon: <StorefrontIcon fontSize="small" />,
    title: "BID",
  },
  {
    href: "/offer",
    icon: <StorefrontIcon fontSize="small" />,
    title: "offer",
  },
  {
    href: "/buy",
    icon: <StorefrontIcon fontSize="small" />,
    title: "BUY",
  },
];

export default function SideBar({ open, onClose }) {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          paddingTop: "64px",
          backgroundColor: "#F6F6F6",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              onClose={onClose}
            />
          ))}
        </Box>
        {/* <Divider sx={{ borderColor: '#2D3748' }} /> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        variant="permanent"
        anchor="left"
        open
        PaperProps={{
          sx: {
            width: 280,
            border: "none",
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          width: 280,
          border: "none",
        },
      }}
    >
      {content}
    </Drawer>
  );
}

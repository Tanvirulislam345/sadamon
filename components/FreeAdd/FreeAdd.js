import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AdContiner } from "../PremiumAdd/Premium.Styles";
import freeAdd from "../../public/assets/nonpremium.png";
import {
  MenuPlainButtonContainer,
  MenuPlainText,
} from "../Layout/Layout.Styles";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";
import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";

const FreeAdd = () => {
  return (
    <AdContiner style={{ display: "flex" }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Image src={freeAdd} alt="" />
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuPlainText fontWidth="700" fontSize="12px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Aliquet sed
          </MenuPlainText>
          <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
            <MenuPlainButtonContainer>
              <WidgetsSharpIcon sx={{ fontSize: "10px" }} />
              <MenuPlainText fontSize="10px">All Categori</MenuPlainText>
            </MenuPlainButtonContainer>
            <MenuPlainButtonContainer>
              <AddLocationSharpIcon sx={{ fontSize: "10px" }} />
              <MenuPlainText fontSize="10px">Location</MenuPlainText>
            </MenuPlainButtonContainer>
          </Stack>
        </Grid>
      </Grid>
    </AdContiner>
  );
};

export default FreeAdd;

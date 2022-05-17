import React from "react";
import { AdContiner } from "./Premium.Styles";
import Image from "next/image";
import premiumImg from "../../public/assets/premiumadd.png";
import {
  MenuCircleButton,
  MenuPlainButtonContainer,
  MenuPlainText,
} from "../Layout/Layout.Styles";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";
import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";
import { Stack } from "@mui/material";

const PremiumAdd = () => {
  return (
    <AdContiner>
      <Image src={premiumImg} alt="" width="500px" height="265px" />

      <Stack sx={{ p: 2 }}>
        <Stack direction="row" spacing={5} sx={{ pb: 2 }}>
          <MenuPlainButtonContainer>
            <MenuCircleButton fontSize="10px" borderRadius="2px">
              Ad
            </MenuCircleButton>
            <MenuPlainText fontSize="10px">Sarah Smith</MenuPlainText>
          </MenuPlainButtonContainer>
          <MenuPlainButtonContainer>
            <MenuCircleButton fontSize="10px" borderRadius="2px">
              Ad
            </MenuCircleButton>
            <MenuPlainText fontSize="10px">Sarah Smith</MenuPlainText>
          </MenuPlainButtonContainer>
        </Stack>

        <MenuPlainText fontWidth="700" fontSize="12px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Aliquet sed
        </MenuPlainText>

        <Stack direction="row" spacing={5} sx={{ pt: 2 }}>
          <MenuPlainButtonContainer>
            <WidgetsSharpIcon sx={{ fontSize: "10px" }} />
            <MenuPlainText fontSize="10px">All Categori</MenuPlainText>
          </MenuPlainButtonContainer>
          <MenuPlainButtonContainer>
            <AddLocationSharpIcon sx={{ fontSize: "10px" }} />
            <MenuPlainText fontSize="10px">Location</MenuPlainText>
          </MenuPlainButtonContainer>
        </Stack>
      </Stack>
    </AdContiner>
  );
};

export default PremiumAdd;

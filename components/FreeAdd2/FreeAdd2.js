import React from "react";
import Image from "next/image";
import premiumImg from "../../public/assets/promote.png";
import { Stack } from "@mui/material";
import { AdContiner, ButtonAd } from "../PremiumAdd/Premium.Styles";
import { MenuPlainText } from "../Layout/Layout.Styles";

const FreeAdd2 = () => {
  return (
    <AdContiner>
      <Image src={premiumImg} alt="" width="500px" height="265px" />

      <Stack sx={{ px: 5, py: 2 }} spacing={2}>
        <MenuPlainText fontWidth="700" fontSize="12px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </MenuPlainText>
        <MenuPlainText fontWidth="400" fontSize="10px">
          Lorem ipsum dolor sit amet, consectetur.
        </MenuPlainText>
        <ButtonAd>Promote</ButtonAd>
      </Stack>
    </AdContiner>
  );
};

export default FreeAdd2;

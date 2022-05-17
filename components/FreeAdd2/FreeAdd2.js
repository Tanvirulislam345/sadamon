import React from "react";
import Image from "next/image";
import premiumImg from "../../public/assets/FreeAdd2.png";
import { Stack } from "@mui/material";
import { AdContiner } from "../PremiumAdd/Premium.Styles";
import { MenuPlainText } from "../Layout/Layout.Styles";

const FreeAdd2 = () => {
  return (
    <AdContiner>
      <Stack sx={{ px: 5, py: 2 }}>
        <MenuPlainText fontWidth="400" fontSize="13px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </MenuPlainText>
      </Stack>
      <Image src={premiumImg} alt="" width="500px" height="265px" />

      <Stack sx={{ px: 5, py: 2 }} spacing={1}>
        <MenuPlainText fontWidth="900" fontSize="16px">
          Post & Earn
        </MenuPlainText>
        <MenuPlainText fontWidth="400" fontSize="10px">
          Lorem ipsum dolor sit amet, consectetur.
        </MenuPlainText>
      </Stack>
    </AdContiner>
  );
};

export default FreeAdd2;

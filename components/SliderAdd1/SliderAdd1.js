import React from "react";
import { AdContiner } from "../PremiumAdd/Premium.Styles";
import Image from "next/image";
import premiumImg from "../../public/assets/slider1.png";
import { Stack } from "@mui/material";
import { MenuPlainText } from "../Layout/Layout.Styles";

const SliderAdd1 = () => {
  return (
    <div style={{ width: "360px" }}>
      <Image src={premiumImg} alt="" width="360px" height="265px" />

      <Stack
        style={{
          padding: "0px 1.5rem",
          marginTop: "-2.3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <AdContiner color="#ffffff">
          <Stack sx={{ px: 3, py: 2 }} spacing={1}>
            <MenuPlainText fontWidth="900" fontSize="16px">
              Post & Earn
            </MenuPlainText>
            <MenuPlainText fontWidth="400" fontSize="10px">
              Lorem ipsum dolor sit amet, consectetur.
            </MenuPlainText>
            <MenuPlainText fontWidth="700" fontSize="14px">
              $ 2.3 - $ 2.5 Cr
            </MenuPlainText>
          </Stack>
        </AdContiner>
      </Stack>
    </div>
  );
};

export default SliderAdd1;

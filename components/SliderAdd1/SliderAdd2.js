import React from "react";
import { AdContiner, ButtonAd } from "../PremiumAdd/Premium.Styles";
import Image from "next/image";
import premiumImg from "../../public/assets/slider2.png";
import { Stack } from "@mui/material";
import { MenuPlainText } from "../Layout/Layout.Styles";

const SliderAdd2 = () => {
  return (
    <AdContiner color="#ffffff" style={{ width: "360px" }}>
      <Image
        src={premiumImg}
        alt=""
        width="360px"
        height="265"
        style={{ borderRadius: "15px" }}
      />
      <Stack sx={{ px: 3, py: 2 }} spacing={1}>
        <MenuPlainText fontWidth="900" fontSize="16px">
          Price: 4 Lac
        </MenuPlainText>
        <MenuPlainText fontWidth="400" fontSize="10px">
          Lorem ipsum dolor sit amet, consectetur.
        </MenuPlainText>
        <ButtonAd background="#C2C3C7" color="black">
          Post Promote
        </ButtonAd>
      </Stack>
    </AdContiner>
  );
};

export default SliderAdd2;

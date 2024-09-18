import {Typography } from "@mui/material";
import React from "react";
import useGlobalStore from "../store/useGlobal";
import { FooterStyle } from "../store/globalStyles";

const Footer: React.FC = () => {
    const colors = useGlobalStore((state) => state.colors);
    return(
        <FooterStyle style={{ backgroundColor: colors.black, color: colors.white }}>
          <Typography variant="h5">Footer Section</Typography>
        </FooterStyle>
    )

}
export default Footer
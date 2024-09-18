import {Typography } from "@mui/material";
import React from "react";
import useGlobalStore from "../store/useGlobal";
import { HeaderStyle } from "../store/globalStyles";



const Header: React.FC = ()=>{
  const colors = useGlobalStore((state) => state.colors);
  const logo = useGlobalStore((state) => state.logo);
  return(
      <HeaderStyle style={{ backgroundColor: colors.yellow }}>
        <img src={logo.logoCompany} style={{ width: '100px', marginRight: '10px' }} />
        <Typography variant="h5">Header Section</Typography>
      </HeaderStyle>

  )

}

export default Header;


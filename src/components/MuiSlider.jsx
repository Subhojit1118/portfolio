import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function ColorSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Typography color={"white"} gutterBottom>
        Java
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={60}
        getAriaValueText={valuetext}
        color="info"
      />
    </Box>
  );
}

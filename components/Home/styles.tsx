"use client";

import stainedGlass from "../../public/assets/stained-glass.png";
import { styled } from "@mui/system";

export const Container = styled("div")({
  background: `url(${stainedGlass.src}) no-repeat center center fixed`,
  "-webkit-background-size": "cover",
  "-moz-background-size": "cover",
  "-o-background-size": "cover",
  backgroundSize: "cover",

  content: '""',
  display: "block",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  "-webkit-backdrop-filter": "blur(5px)",
  backdropFilter: "blur(20px)",
});

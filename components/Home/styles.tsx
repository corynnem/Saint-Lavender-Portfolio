"use client";

import stainedGlass from "../../public/assets/stained-glass.png";
import { styled } from "@mui/system";

export const Container = styled("div")({
  "&:before": {
    content: '""',
    background: `url(${stainedGlass.src}) no-repeat center center fixed`,
    backgroundSize: "cover",
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    zIndex: -200,
    filter: "blur(10px)",
  },
});

// Change to glass background?
// export const RainBackground = styled("div")({
//   "&:before": {
//     content: '""',
//     background: `url(${rainWindow.src}) no-repeat center center fixed`,
//     backgroundSize: "cover",
//     position: "absolute",
//     top: "0px",
//     right: "0px",
//     bottom: "0px",
//     left: "0px",
//     opacity: "0.2",
//     zIndex: -100,
//   },
// });

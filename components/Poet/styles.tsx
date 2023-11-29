"use client";

import tome from "../../public/assets/poetry-archive.png";
import tomeMobile from "../../public/assets/poetry-archive-mobile.png";
// import lightStream from "../../public/assets/light-stream.mov";
import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  background: `url(${tome.src}) no-repeat center center fixed`,
  backgroundSize: "cover",
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",

  [theme.breakpoints.down("md")]: {
    background: `url(${tomeMobile.src}) no-repeat center center fixed `,
    backgroundSize: "cover",
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  },
}));

export const LightStream = styled("video")({
  "&:before": {
    content: '""',
    background: `url(${tome.src}) no-repeat center center fixed`,
    backgroundSize: "cover",
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    opacity: "0.2",
    zIndex: -100,
  },
});

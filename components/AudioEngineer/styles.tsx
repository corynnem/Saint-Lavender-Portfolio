"use client";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Container = styled(Box)({
  background: "teal",
  height: "100vh",
});

export const BottomBar = styled(Box)({
  position: "absolute",
  bottom: "0px",
  backgroundColor: "#C0C0C0",
  width: "100%",
  height: "30px",
  display: "flex",
  justifyContent: "space-between",
});

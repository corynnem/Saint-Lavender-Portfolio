"use client";
import { styled } from "@mui/system";

export const PageContainer = styled("div")(({ theme }) => ({
  zIndex: 100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "60vh",
  },
}));

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  gap: "100px",
  fontSize: "2rem",
  [theme.breakpoints.down("sm")]: {
    gap: 50,
  },
}));

export const NavContainer = styled("div")(({ theme }) => ({
  zIndex: 100,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "2.5rem",
  color: "white",
  [theme.breakpoints.down("md")]: {
    fontSize: " 2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: " 1.2rem",
  },
}));

export const StainedGlassContainer = styled("img")(({ theme }) => ({
  zIndex: 10000,
  width: "55%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

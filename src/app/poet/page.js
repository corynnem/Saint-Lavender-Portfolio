"use-client";
import React from "react";
import withNoSSR from "../../../withNoSSR";
import { Box } from "@mui/material";
import PoetryArchive from "../../../components/Poet";

const Poet = () => {
  return (
    <Box>
      <PoetryArchive />
    </Box>
  );
};

export default withNoSSR(Poet);

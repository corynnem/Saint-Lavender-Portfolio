import React from "react";
import { Box } from "@mui/material";
import { styles } from "./styles";
import Navbar from "../Nav/Navbar";
import stainedGlass from "../../public/assets/stained-glass.png";

const HomeSection = () => {
  return (
    <Box sx={styles.container}>
      {/* <div>Home </div> */}
      <Navbar />
    </Box>
  );
};

export default HomeSection;

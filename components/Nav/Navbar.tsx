import React from "react";
import { Box } from "@mui/material";
// import { styles } from "./styles";
import saintLavender from "../../public/assets/saint-lavender.png";
import { PageContainer, Container, NavContainer } from "./styles";

const Navbar = () => {
  return (
    <PageContainer>
      <img src={saintLavender.src} style={{ width: "60%" }} />
      <Container>
        <NavContainer>
          <Box className="primaryFont">singer songwriter</Box>
          <Box className="primaryFont">poet</Box>
        </NavContainer>
        <NavContainer>
          <Box className="primaryFont">audio engineer</Box>
          <Box className="primaryFont">artist</Box>
        </NavContainer>
      </Container>
    </PageContainer>
  );
};

export default Navbar;

import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import saintLavender from "../../public/assets/saint-lavender.png";
import { PageContainer, Container, NavContainer } from "./styles";

const Navbar = () => {
  return (
    <PageContainer>
      <img src={saintLavender.src} style={{ width: "55%" }} />
      <Container>
        <NavContainer>
          <Link href="/singer-songwriter" className="primaryFont">
            singer songwriter
          </Link>
          <Link href="/poet" className="primaryFont">
            poet
          </Link>
        </NavContainer>
        <NavContainer>
          <Link href="/audio-engineer" className="primaryFont">
            audio engineer
          </Link>
          <Link href="/artist" className="primaryFont">
            artist
          </Link>
        </NavContainer>
      </Container>
    </PageContainer>
  );
};

export default Navbar;

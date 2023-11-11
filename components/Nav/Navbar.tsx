"use-client";
import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import saintLavender from "../../public/assets/saint-lavender.png";
import {
  PageContainer,
  Container,
  NavContainer,
  StainedGlassContainer,
} from "./styles";

const Navbar = () => {
  return (
    <PageContainer>
      <StainedGlassContainer src={saintLavender.src} />
      <Container>
        <NavContainer>
          <Link href="/singer-songwriter" className="baroqueFont">
            singer songwriter
          </Link>
          <Link href="/poet" className="baroqueFont">
            poet
          </Link>
        </NavContainer>
        <NavContainer>
          <Link href="/audio-engineer" className="baroqueFont">
            audio engineer
          </Link>
          <Link href="/artist" className="baroqueFont">
            artist
          </Link>
        </NavContainer>
      </Container>
    </PageContainer>
  );
};

export default Navbar;

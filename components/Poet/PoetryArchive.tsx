"use-client";
import withNoSSR from "../../withNoSSR";
import React, { useState } from "react";

import { PageFlip } from "page-flip";

import { Container, LightStream } from "./styles";

const PoetryArchive = () => {
  const [test, setTest] = useState();
  // if (typeof document !== undefined && typeof document !== null) {
  //   console.log(document);
  //   const pageFlip = new PageFlip(document.getElementById("example"), {
  //     // options here
  //   });
  // }

  return (
    <Container>
      <div className="flip-book" id="example">
        <div className="page page-cover page-cover-top" data-density="hard">
          <div className="page-content">
            <h2>BOOK TITLE</h2>
          </div>
        </div>
        <div className="page">
          <div className="page-content">
            <h2 className="page-header">Page Header 1</h2>
            <div className="page-image"></div>
            <div className="page-text">Page Content 1</div>
            <div className="page-footer">2</div>
          </div>
        </div>
        <div className="page">
          <div className="page-content">
            <h2 className="page-header">Page Header 2</h2>
            <div className="page-image"></div>
            <div className="page-text">Page Content 2</div>
            <div className="page-footer">3</div>
          </div>
        </div>

        <div className="page page-cover page-cover-bottom" data-density="hard">
          <div className="page-content">
            <h2>THE END</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default withNoSSR(PoetryArchive);

import styled from "styled-components";
import { ReactComponent as Pt } from "./../images/puntos.svg";
import React from "react";

const Background = () => {
  return (
    <>
      <Ptup />
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fillOpacity="1"
          d="M0,64L40,69.3C80,75,160,85,240,90.7C320,96,400,96,480,101.3C560,107,640,117,720,117.3C800,117,880,107,960,133.3C1040,160,1120,224,1200,250.7C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </Svg>
      <Ptdown />
    </>
  );
};

export default Background;

const Svg = styled.svg`
  height: 50vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  path {
    fill: #292929da;
  }
`;

const Ptup = styled(Pt)`
  position: fixed;
  z-index: 1;
  top: 2.5rem; /* 40px */
  left: 2.5rem; /* 40px */
`;

const Ptdown = styled(Pt)`
  position: fixed;
  z-index: 1;
  bottom: 2.5rem; /* 40px */
  right: 2.5rem; /* 40px */
`;

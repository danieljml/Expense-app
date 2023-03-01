import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../images/flecha.svg";

const Btn = styled.button`
  display: block;
  width: 3.12rem; /* 50px */
  height: 3.12rem; /* 50px */
  line-height: 3.12rem; /* 50px */
  text-align: center;
  border: none;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.31rem; /* 5px */
  cursor: pointer;

  @media (max-width: 60rem) {
    /* 950px */
    margin-right: 1.25rem; /* 20px */
    width: 2.5rem; /* 40px */
    height: 2.5rem; /* 40px */
    line-height: 2.5rem; /* 40px */
  }
`;

const Icon = styled(Arrow)`
  width: 40%;
  height: auto;
  fill: #fff;
`;

const BtnReturn = ({ ruta = "/" }) => {
  const navigate = useNavigate();
  return (
    <Btn onClick={() => navigate(ruta)}>
      <Icon />
    </Btn>
  );
};

export default BtnReturn;

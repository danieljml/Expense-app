import React from "react";
import styled from "styled-components";
import theme from "../Theme";
import convertToCurrency from "../functions/ConvertToCurrency";
import { useTotal } from "../contexts/TotalSpentContext";
const TotalBar = styled.div`
  background: ${theme.verde};
  font-size: 1.125rem; /* 20px */
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.62rem 2.25rem; /* 10px 40px */
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 31.25rem) {
    /* 500px */
    flex-direction: column;
    font-size: 0.9rem;
  }
`;
export const TotalBarSpent = () => {
  const { total } = useTotal();
  return (
    <TotalBar>
      <p>Total spent in the month:</p>
      <p>{convertToCurrency(total)}</p>
    </TotalBar>
  );
};

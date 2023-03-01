import styled from "styled-components";
import { Link } from "react-router-dom";

const Btn = styled(Link)`
  background: ${(props) => (props.primary ? "#434343" : "#000")};
  width: ${(props) => (props.withIcon ? "13.125rem" : "auto")}; /* 210px */
  margin-left: 1.25rem; /* 20px */
  border: none;
  border-radius: 0.625rem; /* 10px */
  color: #fff;
  font-family: "Roboto Slab", serif;
  height: 3.75rem; /* 60px */
  padding: 1.25rem 1.87rem; /* 20px 30px */
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  transition: 0.5s all ease;
  @media (max-width: 60rem) {
    margin-left: 0;
  }
  &:hover {
    background: ${(props) => (props.primary ? "#404040" : "#000")};
    transform: scale(1.018);
    box-shadow: 0px 1.25rem 2.5rem rgba(0, 0, 0, 0.05);
  }

  svg {
    height: ${(props) => (props.iconBig ? "100%" : "0.75rem;")}; /* 12px */
    fill: white;
  }
`;

export { Btn };

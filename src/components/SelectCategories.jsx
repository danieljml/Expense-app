import React, { useState } from "react";
import styled from "styled-components";
import theme from "../Theme";
import { ReactComponent as SvgDown } from "../images/down.svg";
import CategoryIcon from "../elements/CategoryIcon";

const ContainerSelect = styled.div`
  background: ${theme.grisClaro};
  cursor: pointer;
  border-radius: 0.625rem; /* 10px */
  position: relative;
  height: 4rem; /* 48px */
  width: 35%;
  padding: 0px 1.25rem; /* 20px */
  font-size: 1.25rem; /* 20px */
  text-align: center;
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  @media (max-width: 60rem) {
    width: 100%;
  }
  &:hover {
    background: ${theme.grisClaro2};
  }
`;

const OptionSelect = styled.div`
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 1.25rem; /* 20px */
    height: auto;
    margin-left: 1.25rem; /* 20px */
  }
`;

const Options = styled.div`
  background: ${theme.grisClaro};
  position: absolute;
  top: 4.62rem; /* 73.92px */
  left: 0;
  width: 100%;
  border-radius: 0.625rem; /* 10px */
  max-height: 18.75rem; /* 300px */
  overflow-y: auto;
  transition: 0.5s all ease-in-out;
`;

const Option = styled.div`
  padding: 1.25rem; /* 20px */
  display: flex;
  svg {
    width: 28px;
    height: auto;
    margin-right: 1.25rem; /* 20px */
  }
  @media (max-width: 60rem) {
    font-size: 1rem;
  }
  &:hover {
    background: ${theme.grisClaro2};
  }
`;

const Selectcategories = ({ category, setCategory }) => {
  const [showSelect, setShowSelect] = useState(false);
  const categories = [
    { id: "food", text: "Food" },
    { id: "accounts and payments", text: "Accounts and payments" },
    { id: "home", text: "Home" },
    { id: "transport", text: "Transport" },
    { id: "clothes", text: "Clothes" },
    { id: "health and hygiene", text: "Health and hygiene" },
    { id: "purchases", text: "Purchases" },
    { id: "diversion", text: "Diversion" },
  ];
  return (
    <>
      <ContainerSelect onClick={() => setShowSelect(!showSelect)}>
        <OptionSelect>
          {category} <SvgDown />
        </OptionSelect>
        {showSelect && (
          <Options>
            {categories.map((category) => {
              return (
                <Option
                  key={category.id}
                  data-value={category.id}
                  onClick={(e) => setCategory(e.currentTarget.dataset.value)}
                >
                  <CategoryIcon id={category.id} /> {category.text}
                </Option>
              );
            })}
          </Options>
        )}
      </ContainerSelect>
    </>
  );
};

export default Selectcategories;

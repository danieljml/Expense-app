import styled from "styled-components";
import theme from "../Theme";

const List = styled.ul`
  list-style: none;
  padding: 0 2.5rem; /* 40px */
  height: 100%;
  overflow-y: auto;

  li {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 50rem) {
    padding: 0 1rem;
    /*80px*/
    li {
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;

const ListElement = styled.li`
  padding: 1.25rem 0; /* 20px */
  border-bottom: 2px solid #f2f2f2;
  display: grid;
  gap: 0.31rem; /* 5px */
  justify-content: space-between;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &:hover button,
  &:hover a {
    opacity: 1;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0 2.5rem; /* 40px */
  height: 100%;
  overflow-y: auto;
`;

const ItemListCategories = styled.li`
  padding: 1.25rem 0; /* 20px */
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  font-weight: 500;
  font-size: 1.25rem; /* 20px */
  text-transform: uppercase;
  display: flex;
  align-items: center;

  svg {
    width: 3.12rem; /* 50px */
    height: auto;
    margin-right: 1.25rem; /* 20px */
    border-radius: 0.62rem; /* 10px */
  }

  @media (max-width: 50rem) {
    /* 80px */
    font-size: 1.12rem;
    p {
      display: none;
    }
  }
`;

const Description = styled.div`
  justify-content: center;
  font-size: 1.25rem;
  text-transform: capitalize;
  @media (max-width: 50rem) {
    /* 50px */
    justify-content: end;
  }
`;

const Value = styled.div`
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  justify-content: end;

  @media (max-width: 50rem) {
    /* 80px */
    justify-content: start;
  }
`;

const Date = styled.div`
  border-radius: 0.31rem; /* 5px */
  background: #404040;
  text-align: center;
  color: #fff;
  padding: 0.62rem 3.12rem; /* 10px 50px */
  display: inline-block;
  margin: 1.25rem 0; /* 20px */

  @media (max-width: 50rem) {
    /* 80px */
    width: 100%;
  }
`;

const ContainerBtn = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  justify-content: center;

  @media (max-width: 50rem) {
    /* 80px */
    justify-content: end;
  }
`;

const ActionBtn = styled.button`
  outline: none;
  background: ${theme.grisClaro};
  border: none;
  width: 2.5rem; /* 40px */
  display: inline-block;
  height: 2.5rem; /* 40px */
  line-height: 2.5rem; /* 40px */
  font-size: 14px;
  cursor: pointer;
  border-radius: 0.31rem; /* 5px */
  margin-left: 0.625rem; /* 10px */
  transition: 0.3s ease all;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  &:hover {
    background: ${theme.grisClaro2};
  }

  svg {
    width: 1.125rem; /* 18px */
  }

  @media (max-width: 50rem) {
    /* 80px */
    opacity: 1;
  }
`;

const ContainerSubtitle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Subtitle = styled.h3`
  text-align: center;
  color: ${theme.grisClaro2};
  font-weight: 400;
  font-size: 30px;
  padding: 2.5rem 0; /* 40px */
`;

const ContainerBtnCentral = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem; /* 40px */
`;

const BtnLoadMore = styled.button`
  background: ${theme.grisClaro};
  border: none;
  border-radius: 7px;
  color: #000;
  font-family: "Work Sans", sans-serif;
  padding: 1rem 1.87rem; /* 20px 30px */

  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  transition: 0.3s ease all;

  &:hover {
    background: ${theme.grisClaro2};
  }
`;

export {
  List,
  ListElement,
  CategoryList,
  ItemListCategories,
  Category,
  Description,
  Value,
  Date,
  ContainerBtn,
  ActionBtn,
  BtnLoadMore,
  ContainerBtnCentral,
  ContainerSubtitle,
  Subtitle,
};

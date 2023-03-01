import styled from "styled-components";
import theme from "../Theme";

const ContainerFilters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.563rem; /* 25px */

  @media (max-width: 60rem) {
    /* 950px */
    flex-direction: column;

    & > * {
      width: 100%;
      margin-bottom: 0.62rem; /* 10px */
    }
  }
`;

const Form = styled.form`
  padding: 0 2.5rem; /* 40px */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  input {
    width: 100%;
    text-align: center;
    padding: 1.2rem 0;
    row-gap: 0.313rem;
    font-family: "Roboto Slab", serif;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 60rem) {
    /* 950px */
    padding: 0 1rem;
    justify-content: space-around;
  }
`;

const Input = styled.input`
  font-size: 2.188rem; /* 35px */
  border: none;
  border-bottom: 2px solid ${theme.grisClaro};
  outline: none;
  &::placeholder {
    font-weight: 600;
  }
  @media (max-width: 60rem) {
    /* 950px */
    font-size: 1.5rem; /* 24px */
  }
`;

const InputBig = styled(Input)`
  font-size: 2.625rem; /* 40px */
  font-weight: bold;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0; /* 32px */
`;

export { ContainerFilters, Form, Input, InputBig, ContainerBtn };

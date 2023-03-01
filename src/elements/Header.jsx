import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  padding: 1.5rem 2rem; /* 32px */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 60rem) {
    /* 950px */
    padding: 1.5rem 1rem;
    flex-wrap: ${(props) => (props.secondary ? "nowrap" : "wrap")};
    justify-content: ${(props) =>
      props.secondary ? "space-between" : "center"};
  }
`;

const Title = styled.h1`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 2rem; /* 32px */
  @media (max-width: 60rem) {
    /* 950px */
    margin-bottom: ${(props) => (props.secondary ? "0" : "0.8rem")};
    font-size: 1.5rem; /* 20px */
  }
`;

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 60rem) {
    /* 950px */
    flex-direction: column-reverse;
    & > div {
      width: 100%;
      display: flex;
      margin-bottom: 1.25rem; /* 20px */
      justify-content: end;
    }
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 60rem) {
    gap: 0.8rem;
    flex-wrap: wrap-reverse;
  }
`;

export { Header, Title, ContainerHeader, ContainerBtn };

import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { Btn } from "./elements/Button";
import {
  Header,
  Title,
  ContainerHeader,
  ContainerBtn,
} from "./elements/Header";
import { BtnLogout } from "./elements/BtnLogout";
import { ExpenseForm } from "./components/ExpenseForm";
import { TotalBarSpent } from "./components/TotalBarSpent";

function App() {
  return (
    <>
      <Helmet>
        <title>Add expense</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Add expense</Title>
        </ContainerHeader>
        <ContainerBtn>
          <Btn to="/categories">Categories</Btn>
          <Btn to="/list">Expenses</Btn>
          <BtnLogout />
        </ContainerBtn>
      </Header>
      <ExpenseForm />
      <TotalBarSpent />
    </>
  );
}

export default App;

import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BtnReturn from "../elements/BtnReturn";
import { ExpenseForm } from "./ExpenseForm";
import { useParams } from "react-router-dom";
import { useGetExpense } from "../hooks/useGetExpense";
export const EditExpense = () => {
  const { id } = useParams();
  const [expense] = useGetExpense(id);
  return (
    <>
      <Helmet>
        <title>Expense edition</title>
      </Helmet>
      <Header secondary>
        <BtnReturn ruta="/list" />
        <Title secondary>Expense edition</Title>
      </Header>
      <ExpenseForm expense={expense} />
    </>
  );
};

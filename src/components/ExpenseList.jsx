import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title } from "../elements/Header";
import BtnReturn from "../elements/BtnReturn";
import { TotalBarSpent } from "./TotalBarSpent";
import useGetExpenses from "../hooks/useGetExpenses";
import {
  List,
  ListElement,
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
} from "../elements/ListElements";
import convertToCurrency from "../functions/ConvertToCurrency";
import { ReactComponent as SvgEdit } from "../images/editar.svg";
import { ReactComponent as SvgDelete } from "../images/borrar.svg";
import { Link } from "react-router-dom";
import { Btn } from "../elements/Button";
import CategoryIcon from "../elements/CategoryIcon";
import { formatDate } from "../functions/FormatDate";
import deleteContact from "../firebase/deleteExpense";

export const ExpenseList = () => {
  const [expenses, getMoreExpenses, moreLoading] = useGetExpenses();
  const equalDate = (expenses, index, expense) => {
    if (index !== 0) {
      const actualExpenseDate = formatDate(expense.date);
      const previousExpenseDate = formatDate(expenses[index - 1].date);
      if (actualExpenseDate === previousExpenseDate) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>Expenses</title>
      </Helmet>
      <Header secondary>
        <BtnReturn />
        <Title secondary>Expenses List</Title>
      </Header>
      <List>
        {expenses.map((expense, index) => {
          return (
            <div key={expense.id}>
              {!equalDate(expenses, index, expense) && (
                <Date>{formatDate(expense.date)} </Date>
              )}
              <ListElement>
                <Category>
                  <CategoryIcon id={expense.category} />
                  <p>{expense.category}</p>
                </Category>
                <Description>
                  <p>{expense.description}</p>
                </Description>
                <Value>{convertToCurrency(expense.amountFloat)}</Value>
                <ContainerBtn>
                  <ActionBtn as={Link} to={`/edit/${expense.id}`}>
                    <SvgEdit />
                  </ActionBtn>
                  <ActionBtn onClick={() => deleteContact(expense.id)}>
                    <SvgDelete />
                  </ActionBtn>
                </ContainerBtn>
              </ListElement>
            </div>
          );
        })}
        {moreLoading && (
          <ContainerBtnCentral>
            <BtnLoadMore onClick={() => getMoreExpenses()}>
              Load more
            </BtnLoadMore>
          </ContainerBtnCentral>
        )}
        {expenses.length === 0 && (
          <ContainerSubtitle>
            <Subtitle>Any expenses to show</Subtitle>
            <Btn as={Link} to="/">
              Add expense
            </Btn>
          </ContainerSubtitle>
        )}
      </List>
      <TotalBarSpent />
    </>
  );
};

import React from "react";
import { Helmet } from "react-helmet";
import BtnReturn from "../elements/BtnReturn";
import { Header, Title } from "../elements/Header";
import { TotalBarSpent } from "./TotalBarSpent";
import {
  CategoryList,
  ItemListCategories,
  Category,
  Value,
} from "../elements/ListElements";
import CategoryIcon from "../elements/CategoryIcon";
import convertToCurrency from "../functions/ConvertToCurrency";
import { useGetExpenseByMonthByCategory } from "../hooks/useGetExpenseByMonthByCategory";

export const ExpensesByCategory = () => {
  const [getExpenseByMonthByCategory] = useGetExpenseByMonthByCategory();
  return (
    <>
      <Helmet>
        <title>Expenses by category</title>
      </Helmet>
      <Header secondary>
        <BtnReturn />
        <Title secondary>Expenses by category</Title>
      </Header>
      <CategoryList>
        {getExpenseByMonthByCategory.map((expense, index) => {
          return (
            <ItemListCategories key={index}>
              <Category>
                <CategoryIcon id={expense.category} />
                {expense.category}
              </Category>
              <Value>{convertToCurrency(expense.amount)}</Value>
            </ItemListCategories>
          );
        })}
      </CategoryList>
      <TotalBarSpent />
    </>
  );
};

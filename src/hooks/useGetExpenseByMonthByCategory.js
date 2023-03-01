import { useState, useEffect } from "react";
import useGetExpenseByMonth from "./useGetExpenseByMonth";

export const useGetExpenseByMonthByCategory = () => {
  const [getExpenseByMonthByCategory, setGetExpenseByMonthByCategory] =
    useState([]);
  const expenses = useGetExpenseByMonth();

  useEffect(() => {
    const expensesSum = expenses.reduce(
      (objResult, objActual) => {
        const actualCategory = objActual.category;
        const actualAmount = Number(objActual.amountFloat);
        objResult[actualCategory] += actualAmount;
        return objResult;
      },
      {
        food: 0,
        "accounts and payments": 0,
        home: 0,
        transport: 0,
        clothes: 0,
        "health and hygiene": 0,
        purchases: 0,
        diversion: 0,
      }
    );
    setGetExpenseByMonthByCategory(
      Object.entries(expensesSum).map((item) => {
        return {
          category: item[0],
          amount: item[1],
        };
      })
    );
  }, [expenses]);
  return [getExpenseByMonthByCategory];
};

import React, { useState, useEffect, useContext } from "react";
import useGetExpenseByMonth from "../hooks/useGetExpenseByMonth";

const nameContext = React.createContext();
const useTotal = () => useContext(nameContext);
const TotalSpentProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const expenses = useGetExpenseByMonth();

  useEffect(() => {
    let acum = 0;
    expenses.forEach((expense) => {
      acum += Number(expense.amountFloat);
    });

    setTotal(acum);
  }, [expenses]);
  return (
    <nameContext.Provider value={{ total: total }}>
      {children}
    </nameContext.Provider>
  );
};

export { TotalSpentProvider, nameContext, useTotal };

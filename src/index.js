import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";
import favicon from "./images/bx-dollar.svg";
import Background from "./elements/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./elements/Container";
import { Login } from "./components/Login";
import { Signin } from "./components/Signin";
import { ExpensesByCategory } from "./components/ExpensesByCategory";
import { EditExpense } from "./components/EditExpense";
import { ExpenseList } from "./components/ExpenseList";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { TotalSpentProvider } from "./contexts/TotalSpentContext";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Expense management</title>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <AuthProvider>
        <TotalSpentProvider>
          <Router>
            <Container>
              <Routes>
                <Route index path="/log-in" element={<Login />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/categories" element={<ExpensesByCategory />} />
                  <Route path="/list" element={<ExpenseList />} />
                  <Route path="/edit/:id" element={<EditExpense />} />
                  <Route path="/" element={<App />} />
                </Route>
              </Routes>
            </Container>
          </Router>
        </TotalSpentProvider>
      </AuthProvider>

      <Background />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

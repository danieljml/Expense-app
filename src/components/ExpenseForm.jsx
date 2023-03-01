import React, { useState, useEffect } from "react";
import {
  ContainerFilters,
  Form,
  Input,
  InputBig,
  ContainerBtn,
} from "../elements/FormElements";
import { Btn } from "../elements/Button";
import { ReactComponent as SvgPlus } from "../images/plus.svg";
import SelectCategories from "./SelectCategories";
import DatePicker from "./DatePicker";
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import addExpense from "../firebase/addExpense";
import { UserAuth } from "../contexts/AuthContext";
import Alert from "../elements/Alert";
import { useNavigate } from "react-router-dom";
import updateExpense from "../firebase/editExpense";

export const ExpenseForm = ({ expense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("home");
  const [date, setDate] = useState(new Date());
  const { user } = UserAuth();
  const [stateAlert, setStateAlert] = useState(false);
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    //Comprobamos si hay algun gasto
    //De ser asi establecemos todo el state con los valore del gasto
    if (expense) {
      // console.log(expense.data(), user.uid, expense.data().amountFloat);
      //Comprobamos que sea el gasto del usuario que inicio sesion
      if (expense.data().uidUser === user.uid) {
        setDescription(expense.data().description);
        setAmount(expense.data().amountFloat);
        setCategory(expense.data().category);
        setDate(fromUnixTime(expense.data().date));
      } else {
        navigate("/list");
      }
    }
  }, [expense, user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amountFloat = parseFloat(amount).toFixed(2);
    if (description !== "" && amount !== "") {
      if (amountFloat) {
        if (expense) {
          // console.log(description, amount, category, date);
          updateExpense({
            date: getUnixTime(date),
            id: expense.id,
            description,
            amountFloat,
            category,
          })
            .then(() => {
              navigate("/");
            })
            .catch((err) => console.log(err));
        } else {
          addExpense({
            description,
            amountFloat,
            category,
            date: getUnixTime(date),
            uidUser: user.uid,
          })
            .then(() => {
              setDescription("");
              setAmount("");
              setDate(new Date());
              setCategory("home");

              setStateAlert(true);
              setAlert({
                type: "success",
                message: "Expense add successfully",
              });
            })
            .catch(() => {
              setStateAlert(true);
              setAlert({
                type: "error",
                message: "There was a problem trying to add the expense",
              });
            });
        }
      } else {
        setStateAlert(true);
        setAlert({
          type: "error",
          message: "The value you entered is not correct",
        });
      }
    } else {
      setStateAlert(true);
      setAlert({
        type: "error",
        message: "Fill in all the inputs",
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <ContainerFilters>
          <SelectCategories category={category} setCategory={setCategory} />
          <DatePicker dayPicker date={date} setDate={setDate} />
        </ContainerFilters>
        <div>
          <Input
            autoComplete="off"
            type="text"
            name="description"
            placeholder="DESCRIPTION"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputBig
            autoComplete="off"
            type="text"
            name="amount"
            placeholder="$0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
          />
        </div>
        <ContainerBtn>
          <Btn as="button" primary withIcon type="submit">
            {expense ? "Edit expense" : "Add expense"} <SvgPlus />
          </Btn>
        </ContainerBtn>
        <Alert
          type={alert.type}
          message={alert.message}
          stateAlert={stateAlert}
          setStateAlert={setStateAlert}
        />
      </Form>
    </>
  );
};

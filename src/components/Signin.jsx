import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Btn } from "../elements/Button";
import { Header, Title, ContainerHeader } from "../elements/Header";
import { Form, Input, ContainerBtn } from "../elements/FormElements";
import { ReactComponent as SvgSignin } from "../images/registro.svg";
import styled from "styled-components";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Alert from "../elements/Alert";

const Svg = styled(SvgSignin)`
  width: 100%;
  max-height: 6.25rem;
  margin-bottom: 1rem;
`;

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [stateAlert, setStateAlert] = useState(false);
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStateAlert(false);
    setAlert({});
    const regularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regularExpression.test(email)) {
      setStateAlert(true);
      return setAlert({ type: "error", message: "Please enter a valid email" });
    } else if (email === "" || password === "" || password2 === "") {
      setStateAlert(true);
      return setAlert({ type: "error", message: "Fill in all the inputs" });
    } else if (password !== password2) {
      setStateAlert(true);
      return setAlert({ type: "error", message: "Passwords are not the same" });
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setStateAlert(true);
      let message = "";
      switch (error.code) {
        case "auth/invalid-password":
          message = "The password must be at least 6 characters long.";
          break;
        case "auth/email-already-in-use":
          message = "An account already exists with the email provided.";
          break;
        case "auth/invalid-email":
          message = "The email is not valid.";
          break;
        default:
          message = "There was an error trying to create the account.";
          break;
      }
      setAlert({
        type: "error",
        message,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Create new account</Title>
          <div>
            <Btn to="/log-in">Log in</Btn>
          </div>
        </ContainerHeader>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="Email"
          name="Email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          name="password2"
          placeholder="REPEAT PASSWORD"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <ContainerBtn>
          <Btn as="button" primary type="submit">
            Create a account
          </Btn>
        </ContainerBtn>
      </Form>
      <Alert
        type={alert.type}
        message={alert.message}
        stateAlert={stateAlert}
        setStateAlert={setStateAlert}
      />
    </>
  );
};

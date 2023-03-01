import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Btn } from "../elements/Button";
import { Header, Title, ContainerHeader } from "../elements/Header";
import { Form, Input, ContainerBtn } from "../elements/FormElements";
import { ReactComponent as SvgLogin } from "../images/login.svg";
import styled from "styled-components";
import { auth, signInWithEmailAndPassword } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Alert from "../elements/Alert";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 9.25rem;
  margin-bottom: 1rem;
`;
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    } else if (email === "" || password === "") {
      setStateAlert(true);
      return setAlert({ type: "error", message: "Fill in the inputs" });
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        type: "success",
        message: "has successfully registered",
      });
      navigate("/");
    } catch (error) {
      setStateAlert(true);
      let message = "";
      switch (error.code) {
        case "auth/wrong-password":
          message = "The password is not correct";
          break;
        case "auth/user-not-found":
          message = "No account was found with this email";
          break;
        default:
          message = "There was an error trying to log in.";
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
        <title>Log in</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Log in</Title>
          <div>
            <Btn to="/sign-in">Create new account</Btn>
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
        <ContainerBtn>
          <Btn as="button" primary type="submit">
            Log in
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

import React from "react";
import { ReactComponent as SvgLogout } from "../images/log-out.svg";
import { Btn } from "./Button";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const BtnLogout = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/log-in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Btn iconBig as="button" onClick={logout}>
        <SvgLogout />
      </Btn>
    </>
  );
};

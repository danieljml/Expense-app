import { useState, useEffect } from "react";
import { db, doc, getDoc } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
export const useGetExpense = (id) => {
  const navigate = useNavigate();
  const [expense, setExpense] = useState("");

  useEffect(() => {
    const getExpense = async () => {
      const document = await getDoc(doc(db, `expenses`, id));
      if (document.exists()) {
        setExpense(document);
      } else {
        navigate("/list");
      }
    };
    getExpense();
  }, [id, navigate]);
  return [expense];
};

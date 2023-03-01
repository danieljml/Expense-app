import { useState, useEffect } from "react";
import { db, collection } from "./../firebase/firebaseConfig";
import { query, where, orderBy, onSnapshot } from "firebase/firestore";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import { UserAuth } from "../contexts/AuthContext";

const useGetExpenseByMonth = () => {
  const [expenses, setExpenses] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    const monthStartDay = getUnixTime(startOfMonth(new Date()));
    const monthEndDay = getUnixTime(endOfMonth(new Date()));

    if (user) {
      const q = query(
        collection(db, "expenses"),
        where("uidUser", "==", user.uid),
        where("date", ">=", monthStartDay),
        where("date", "<=", monthEndDay),
        orderBy("date", "desc")
      );
      const unsuscribe = onSnapshot(q, (snap) => {
        setExpenses(
          snap.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
      // Use Effect tiene que retornar una funcion que se va a ejecutar cuando se desmonte el componente.
      // En este caso queremos que ejecute el unsuscribe a la coleccion de firestore.
      return unsuscribe;
    }
  }, [user]);

  return expenses;
};

export default useGetExpenseByMonth;

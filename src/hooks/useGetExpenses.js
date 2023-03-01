import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
} from "firebase/firestore";
import { UserAuth } from "../contexts/AuthContext";

const useGetExpenses = () => {
  const [lastExpense, setLastExpense] = useState(null);
  const [moreLoading, setMoreLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const { user } = UserAuth();

  const getMoreExpenses = () => {
    const q = query(
      collection(db, "expenses"),
      where("uidUser", "==", user.uid),
      orderBy("date", "desc"),
      limit(10),
      startAfter(lastExpense)
    );

    onSnapshot(
      q,
      (snap) => {
        if (snap.docs.length > 0) {
          setLastExpense(snap.docs[snap.docs.length - 1]);
          setExpenses(
            expenses.concat(
              snap.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
              })
            )
          );
        } else {
          setMoreLoading(false);
        }
      },
      (error) => console.log(error)
    );
  };
  useEffect(() => {
    const q = query(
      collection(db, "expenses"),
      where("uidUser", "==", user.uid),
      orderBy("date", "desc"),
      limit(10)
    );

    const unsuscribe = onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setExpenses(data);

      if (snap.docs.length > 0) {
        setLastExpense(snap.docs[snap.docs.length - 1]);
        setMoreLoading(true);
      } else {
        setMoreLoading(false);
      }
    });
    return unsuscribe;
  }, [user]);
  return [expenses, getMoreExpenses, moreLoading];
};

export default useGetExpenses;

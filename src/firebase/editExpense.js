import { db } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
const updateExpense = async ({
  id,
  description,
  amountFloat,
  category,
  date,
}) => {
  return await updateDoc(doc(db, "expenses", id), {
    description,
    amountFloat,
    category,
    date,
  });
};

export default updateExpense;

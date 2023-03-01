import { db, collection, addDoc } from "./firebaseConfig";

const addExpense = async ({
  description,
  amountFloat,
  category,
  date,
  uidUser,
}) => {
  try {
    await addDoc(collection(db, "expenses"), {
      description,
      amountFloat,
      category,
      date,
      uidUser,
    });
    console.log("Information send correctly");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addExpense;

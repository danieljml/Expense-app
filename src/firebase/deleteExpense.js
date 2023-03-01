import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const deleteContact = async (id) => {
  try {
    await deleteDoc(doc(db, "expenses", id));
  } catch (error) {
    console.log(error);
  }
};

export default deleteContact;

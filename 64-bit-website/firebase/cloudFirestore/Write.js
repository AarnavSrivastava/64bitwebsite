import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "../initFirebase"

export const sendContactForm = async ({ fname, lname, email, amt, charity }) => {
  try {
    const ref = collection(firestore, "donation");
    await addDoc(ref, {
      fname,
      lname,
      email,
      amt,
      charity,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err)
    return -1;
  }
};
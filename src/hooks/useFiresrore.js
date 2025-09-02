import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "sonner";

export const useFiresrore = () => {
  const addDocument = (data, collectionName) => {
   addDoc(collection(db, collectionName), data)
     .then(() => {
       console.log("Document successfully written!");
     })
     .catch((error) => {
       console.error("Error writing document: ", error);
     });
  };
  const deleteDocument = (id, collectionName) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => {
            toast.success("Transaction deleted successfully");

      })
      .catch((error) => {
        toast.error("Error removing document: ", error);
      });
  };
  return { addDocument, deleteDocument };
};

import React, { useEffect, useRef } from "react";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

export const useCollection = (c, _q) => {
  const [data, setData] = React.useState(null);
  const q = useRef(_q).current;
  useEffect(() => {
   let ref = collection(db, c);
if(q){
   ref = query(collection(db, c), where(...q));
}

   const unsubscribe = onSnapshot(ref, (snapchot) => {
     const dataFromCollection = [];
     snapchot.forEach((doc) => {
       dataFromCollection.push({ id: doc.id, ...doc.data() });
     });
     setData(dataFromCollection);
   });
   return () => unsubscribe()
  }, [c, q]);
  return {data}
};

import { company } from "../models/models";

const getFirestore = () => import("../firebase/firestore");

export const findCompanyById = async (id: string) => {
    try {
      const { doc, getDoc, db } = await getFirestore();
      const companyDocRef = doc(db, "company", id);
      const companyDocSnapshot = await getDoc(companyDocRef);
      if (companyDocSnapshot.exists()) {
        const companyData = companyDocSnapshot.data();
        const cp = {
          id: companyDocSnapshot.id,
          ...companyData,
        } as company;
        return cp;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error retrieving company details:", error);
      return null;
    }
  };